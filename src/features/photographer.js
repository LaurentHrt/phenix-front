import { selectPhotographer } from '../utils/selectors'
import { createSlice } from '@reduxjs/toolkit'

const api = `http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}/api/photographers/`

// le state initial de cette feature est un objet vide
const initialState = {
  // chaque propriété de cet objet correspond à l'Id d'un freelance
  // 3: { status: 'void' }
}

export function fetchOrUpdatePhotographer(photographerId) {
  // on retourne un thunk
  return async (dispatch, getState) => {
    // ...
    const selectPhotographerById = selectPhotographer(photographerId)
    const status = selectPhotographerById(getState()).status
    if (status === 'pending' || status === 'updating') {
      return
    }
    dispatch(actions.fetching(photographerId))
    try {
      const response = await fetch(api + photographerId)
      const data = await response.json()
      if (response.ok) dispatch(actions.resolved(photographerId, data))
      else throw data.error
    } catch (error) {
      dispatch(actions.rejected(photographerId, error))
    }
  }
}

function setVoidIfUndefined(draft, photographerId) {
  if (draft[photographerId] === undefined) {
    draft[photographerId] = { status: 'void' }
  }
}

const { actions, reducer } = createSlice({
  name: 'photographer',
  initialState,
  reducers: {
    fetching: {
      prepare: (photographerId) => ({
        payload: { photographerId },
      }),
      reducer: (draft, action) => {
        setVoidIfUndefined(draft, action.payload.photographerId)
        if (draft[action.payload.photographerId].status === 'void') {
          draft[action.payload.photographerId].status = 'pending'
          return
        }
        if (draft[action.payload.photographerId].status === 'rejected') {
          draft[action.payload.photographerId].error = null
          draft[action.payload.photographerId].status = 'pending'
          return
        }
        if (draft[action.payload.photographerId].status === 'resolved') {
          draft[action.payload.photographerId].status = 'updating'
          return
        }
      },
    },
    resolved: {
      // prepare permet de modifier le payload
      prepare: (photographerId, data) => ({
        payload: { photographerId, data },
      }),
      // la fonction de reducer
      reducer: (draft, action) => {
        setVoidIfUndefined(draft, action.payload.photographerId)
        if (
          draft[action.payload.photographerId].status === 'pending' ||
          draft[action.payload.photographerId].status === 'updating'
        ) {
          draft[action.payload.photographerId].data = action.payload.data
          draft[action.payload.photographerId].status = 'resolved'
          return
        }
        return
      },
    },
    rejected: {
      prepare: (photographerId, error) => ({
        payload: { photographerId, error },
      }),
      reducer: (draft, action) => {
        setVoidIfUndefined(draft, action.payload.photographerId)
        if (
          draft[action.payload.photographerId].status === 'pending' ||
          draft[action.payload.photographerId].status === 'updating'
        ) {
          draft[action.payload.photographerId].error = action.payload.error
          draft[action.payload.photographerId].data = null
          draft[action.payload.photographerId].status = 'rejected'
          return
        }
        return
      },
    },
  },
})

export default reducer

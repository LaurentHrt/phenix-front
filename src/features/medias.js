import { selectMedias } from '../utils/selectors'
import { createSlice } from '@reduxjs/toolkit'
import { STATUS_TYPES } from '../utils/type'

const api = `http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}/api/medias/`

// le state initial de cette feature est un objet vide
const initialState = {
  // chaque propriété de cet objet correspond à l'Id d'un freelance
  // 3: { status: STATUS_TYPES.VOID }
}

export function fetchOrUpdateMedias(photographerId) {
  // on retourne un thunk
  return async (dispatch, getState) => {
    // ...
    const selectMediaByPhotographerId = selectMedias(photographerId)
    const status = selectMediaByPhotographerId(getState()).status
    if (status === STATUS_TYPES.PENDING || status === STATUS_TYPES.UPDATING) {
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
    draft[photographerId] = { status: STATUS_TYPES.VOID }
  }
}

const { actions, reducer } = createSlice({
  name: 'medias',
  initialState,
  reducers: {
    fetching: {
      prepare: (photographerId) => ({
        payload: { photographerId },
      }),
      reducer: (draft, action) => {
        setVoidIfUndefined(draft, action.payload.photographerId)
        if (draft[action.payload.photographerId].status === STATUS_TYPES.VOID) {
          draft[action.payload.photographerId].status = STATUS_TYPES.PENDING
          return
        }
        if (
          draft[action.payload.photographerId].status === STATUS_TYPES.REJECTED
        ) {
          draft[action.payload.photographerId].error = null
          draft[action.payload.photographerId].status = STATUS_TYPES.PENDING
          return
        }
        if (
          draft[action.payload.photographerId].status === STATUS_TYPES.RESOLVED
        ) {
          draft[action.payload.photographerId].status = STATUS_TYPES.UPDATING
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
          draft[action.payload.photographerId].status ===
            STATUS_TYPES.PENDING ||
          draft[action.payload.photographerId].status === STATUS_TYPES.UPDATING
        ) {
          draft[action.payload.photographerId].data = action.payload.data
          draft[action.payload.photographerId].status = STATUS_TYPES.RESOLVED
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
          draft[action.payload.photographerId].status ===
            STATUS_TYPES.PENDING ||
          draft[action.payload.photographerId].status === STATUS_TYPES.UPDATING
        ) {
          draft[action.payload.photographerId].error = action.payload.error
          draft[action.payload.photographerId].data = null
          draft[action.payload.photographerId].status = STATUS_TYPES.REJECTED
          return
        }
        return
      },
    },
  },
})

export default reducer

import { createSlice } from '@reduxjs/toolkit'
import { selectPhotographers } from '../utils/selectors'

const api = 'http://localhost:3000/api/photographers'

const initialState = {
  status: 'void',
  data: null,
  error: null,
}

export async function fetchOrUpdatePhotographers(dispatch, getState) {
  const status = selectPhotographers(getState()).status
  if (status === 'pending' || status === 'updating') {
    return
  }
  dispatch(actions.fetching())
  try {
    const response = await fetch(api)
    const data = await response.json()
    dispatch(actions.resolved(data))
  } catch (error) {
    dispatch(actions.rejected(error))
  }
}

const { actions, reducer } = createSlice({
  name: 'photographers',
  initialState,
  reducers: {
    fetching: (draft) => {
      if (draft.status === 'void') {
        draft.status = 'pending'
        return
      }
      if (draft.status === 'rejected') {
        draft.error = null
        draft.status = 'pending'
        return
      }
      if (draft.status === 'resolved') {
        draft.status = 'updating'
        return
      }
      return
    },
    resolved: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.data = action.payload
        draft.status = 'resolved'
        return
      }
      return
    },
    rejected: (draft, action) => {
      if (draft.status === 'pending' || draft.status === 'updating') {
        draft.status = 'rejected'
        draft.error = action.payload
        draft.data = null
        return
      }
      return
    },
  },
})

export default reducer

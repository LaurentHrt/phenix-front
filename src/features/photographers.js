import { createSlice } from '@reduxjs/toolkit'
import { selectPhotographers } from '../utils/selectors'
import { STATUS_TYPES, IStatusType } from '../utils/type'

const api = `http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}/api/photographers`

const initialState = {
  status: STATUS_TYPES.VOID,
  data: null,
  error: null,
}

export async function fetchOrUpdatePhotographers(dispatch, getState) {
  const status: IStatusType = selectPhotographers(getState()).status
  if (status === STATUS_TYPES.PENDING || status === STATUS_TYPES.UPDATING) {
    return
  }
  dispatch(actions.fetching())
  try {
    const response = await fetch(api)
    const data = await response.json()
    if (response.ok) dispatch(actions.resolved(data))
    else throw data.error
  } catch (error) {
    dispatch(actions.rejected(error))
  }
}

const { actions, reducer } = createSlice({
  name: 'photographers',
  initialState,
  reducers: {
    fetching: (draft) => {
      if (draft.status === STATUS_TYPES.VOID) {
        draft.status = STATUS_TYPES.PENDING
        return
      }
      if (draft.status === STATUS_TYPES.REJECTED) {
        draft.error = null
        draft.status = STATUS_TYPES.PENDING
        return
      }
      if (draft.status === STATUS_TYPES.RESOLVED) {
        draft.status = STATUS_TYPES.UPDATING
        return
      }
      return
    },
    resolved: (draft, action) => {
      if (
        draft.status === STATUS_TYPES.PENDING ||
        draft.status === STATUS_TYPES.UPDATING
      ) {
        draft.data = action.payload
        draft.status = STATUS_TYPES.RESOLVED
        return
      }
      return
    },
    rejected: (draft, action) => {
      if (
        draft.status === STATUS_TYPES.PENDING ||
        draft.status === STATUS_TYPES.UPDATING
      ) {
        draft.status = STATUS_TYPES.REJECTED
        draft.error = action.payload
        draft.data = null
        return
      }
      return
    },
  },
})

export default reducer

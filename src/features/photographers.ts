import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { selectPhotographers } from '../utils/selectors'
import { STATUS_TYPES } from '../utils/type'
import type { I_StatusType } from '../utils/type'
import type { RootState } from '../utils/store'

const api = `http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}/api/photographers`

interface PhotographersState {
  status: I_StatusType
  data: any
  error: any
}

const initialState: PhotographersState = {
  status: STATUS_TYPES.VOID,
  data: null,
  error: null,
}

export async function fetchOrUpdatePhotographers(dispatch: any, getState: any) {
  const status: I_StatusType = selectPhotographers(getState()).status
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
    resolved: (draft, action: PayloadAction<any>) => {
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
    rejected: (draft, action: PayloadAction<any>) => {
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

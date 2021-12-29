import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { selectPhotographers } from '../utils/selectors'
import { I_Error, STATUS_TYPES } from '../utils/type'
import type { I_StatusType } from '../utils/type'
import { I_PhotographerModel } from '../models/Photographer'

const api = `http://${import.meta.env.VITE_API}:${
  import.meta.env.VITE_PORT
}/api/photographers`

export interface I_PhotographersResponseData {
  status: I_StatusType
  data: I_PhotographerModel[]
  error?: I_Error
}

const initialState: I_PhotographersResponseData = {
  status: STATUS_TYPES.VOID,
  data: [],
  error: undefined,
}

export async function fetchOrUpdatePhotographers(dispatch: any, getState: any) {
  const status: I_StatusType = selectPhotographers(getState()).status
  if (status === STATUS_TYPES.PENDING || status === STATUS_TYPES.UPDATING) {
    return
  }
  dispatch(actions.fetching())
  try {
    const response = await fetch(api)
    const data: I_PhotographersResponseData = await response.json()
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
        draft.error = undefined
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
        draft.data = []
        return
      }
      return
    },
  },
})

export default reducer

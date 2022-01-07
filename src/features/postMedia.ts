import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import { I_Error, I_StatusType, STATUS_TYPES } from '../utils/type'

const api = `http://${import.meta.env.VITE_API}:${
  import.meta.env.VITE_PORT
}/api/medias/`

export interface I_PostMediasResponseData {
  status: I_StatusType
  response?: I_PostMediasResponse
  error?: I_Error
}

const initialState: I_PostMediasResponseData = {
  status: STATUS_TYPES.VOID,
  response: {},
  error: undefined,
}

export function postMedia(data) {
  return async (dispatch: any, getState: any) => {
    const status: I_StatusType = selectPostMedia()(getState()).status
    if (status === STATUS_TYPES.PENDING) {
      return
    }

    const formData = new FormData()
    formData.append('file', data.file)
    formData.append('title', data.title)
    formData.append('price', data.price.toString())
    formData.append('type', data.type)
    formData.append('alt', data.description)
    formData.append('photographerId', data.photographerId || '')

    dispatch(actions.posting(formData))

    try {
      const response = await axios.post(api, formData)
      const data: I_PostMediasResponseData = await response.json()
      if (response.ok) dispatch(actions.resolved)
      else throw data.error
    } catch (error) {
      dispatch(actions.rejected(error))
    }
  }
}

const { actions, reducer } = createSlice({
  name: 'postMedia',
  initialState,
  reducers: {
    posting: {
      prepare: (data) => ({
        payload: { data },
      }),
      reducer: (draft, action: PayloadAction<any>) => {
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
          draft.status = STATUS_TYPES.PENDING
          return
        }
      },
    },
    resolved: {
      prepare: (response) => ({
        payload: { response },
      }),
      reducer: (draft, action: PayloadAction<any>) => {
        if (draft.status === STATUS_TYPES.PENDING) {
          draft.response = action.payload.response
          draft.status = STATUS_TYPES.RESOLVED
          return
        }
        return
      },
    },
    rejected: {
      prepare: (error) => ({
        payload: { error },
      }),
      reducer: (draft, action: PayloadAction<any>) => {
        if (draft.status === STATUS_TYPES.PENDING) {
          draft.error = action.payload.error
          draft.response = {}
          draft.status = STATUS_TYPES.REJECTED
          return
        }
        return
      },
    },
  },
})

export default reducer

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { I_Error, I_StatusType, STATUS_TYPES } from '../utils/type'
import { selectPostMedia } from '../utils/selectors'
import { I_PostMediaFormValues } from '../components/NewMediaModal/index'

const url = `http://${import.meta.env.VITE_API}:${import.meta.env.VITE_PORT}${
  import.meta.env.VITE_ROUTE_API_MEDIAS
}/`

export interface I_PostMediasResponseData {
  status: I_StatusType
  response?: {}
  error?: I_Error
}

const initialState: I_PostMediasResponseData = {
  status: STATUS_TYPES.VOID,
  response: {},
  error: undefined,
}

export function postMedia(mediaData: I_PostMediaFormValues) {
  return async (dispatch: any, getState: any) => {
    const status: I_StatusType = selectPostMedia(getState()).status
    if (status === STATUS_TYPES.PENDING) {
      return
    }

    dispatch(actions.posting(mediaData))

    try {
      const formData = new FormData()
      formData.append('file', mediaData.file)
      formData.append('title', mediaData.title)
      formData.append('price', mediaData.price.toString())
      formData.append('type', mediaData.type)
      formData.append('alt', mediaData.description)
      formData.append(
        'photographerId',
        mediaData.photographerId.toString() || ''
      )

      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      })
      const data: I_PostMediasResponseData = await response.json()
      console.log('ici')

      if (response.ok) {
        console.log('repsonse OK')

        dispatch(actions.resolved(data))
      } else throw data.error
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
      prepare: (mediaData) => ({
        payload: { mediaData },
      }),
      reducer: (draft) => {
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
        console.log(action.payload)

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

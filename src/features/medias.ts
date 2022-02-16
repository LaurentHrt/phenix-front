import { selectMedias } from '../utils/selectors'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { I_Error, I_StatusType, STATUS_TYPES } from '../utils/type'
import { T_PhotographerId } from '../models/Photographer'
import { I_Media, T_MediaId } from '../models/Media'

const url = new URL(`../../data/media.json`, import.meta.url).href

export interface I_MediasResponseData {
  status: I_StatusType
  data?: I_Media[]
  error?: I_Error
}

interface I_MediasState {
  [index: T_MediaId]: I_MediasResponseData
}

const initialState: I_MediasState = {
  // chaque propriété de cet objet correspond à l'Id d'un photographe
  // 3: { status: STATUS_TYPES.VOID }
}

export function fetchOrUpdateMedias(photographerId: T_PhotographerId) {
  // on retourne un thunk
  return async (dispatch: any, getState: any) => {
    const status: I_StatusType = selectMedias(photographerId)(getState()).status
    if (status === STATUS_TYPES.PENDING || status === STATUS_TYPES.UPDATING) {
      return
    }
    dispatch(actions.fetching(photographerId))
    try {
      const response = await fetch(url)
      const data: I_MediasResponseData = await response.json()
      if (response.ok) {
        const filteredData = data.filter(
          (media: I_Media) => media.photographerId === photographerId
        )
        dispatch(actions.resolved(photographerId, filteredData))
      } else throw data.error
    } catch (error) {
      dispatch(actions.rejected(photographerId, error))
    }
  }
}

function setVoidIfUndefined(
  draft: I_MediasState,
  photographerId: T_PhotographerId
) {
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
      reducer: (draft, action: PayloadAction<any>) => {
        setVoidIfUndefined(draft, action.payload.photographerId)
        if (draft[action.payload.photographerId].status === STATUS_TYPES.VOID) {
          draft[action.payload.photographerId].status = STATUS_TYPES.PENDING
          return
        }
        if (
          draft[action.payload.photographerId].status === STATUS_TYPES.REJECTED
        ) {
          draft[action.payload.photographerId].error = undefined
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
      reducer: (draft, action: PayloadAction<any>) => {
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
      reducer: (draft, action: PayloadAction<any>) => {
        setVoidIfUndefined(draft, action.payload.photographerId)
        if (
          draft[action.payload.photographerId].status ===
            STATUS_TYPES.PENDING ||
          draft[action.payload.photographerId].status === STATUS_TYPES.UPDATING
        ) {
          draft[action.payload.photographerId].error = action.payload.error
          draft[action.payload.photographerId].data = []
          draft[action.payload.photographerId].status = STATUS_TYPES.REJECTED
          return
        }
        return
      },
    },
  },
})

export default reducer

import { selectPhotographer } from '../utils/selectors'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { I_Error, STATUS_TYPES } from '../utils/type'
import type { I_StatusType } from '../utils/type'
import { I_PhotographerModel, T_PhotographerId } from '../models/Photographer'

const url = `http://${import.meta.env.VITE_API}:${
  import.meta.env.VITE_PORT
}/api/photographers/`

export interface I_PhotographerResponseData {
  status: I_StatusType
  data?: I_PhotographerModel
  error?: I_Error
}

interface PhotographerState {
  [index: T_PhotographerId]: I_PhotographerResponseData
}

const initialState: PhotographerState = {
  // chaque propriété de cet objet correspond à l'Id d'un photographe
  // 3: { status: STATUS_TYPES.VOID }
}

export function fetchOrUpdatePhotographer(photographerId: T_PhotographerId) {
  // on retourne un thunk
  return async (dispatch: any, getState: any) => {
    // ...
    const status: I_StatusType = selectPhotographer(photographerId)(
      getState()
    ).status
    if (status === STATUS_TYPES.PENDING || status === STATUS_TYPES.UPDATING) {
      return
    }
    dispatch(actions.fetching(photographerId))
    try {
      const response = await fetch(url + photographerId)
      const data: I_PhotographerResponseData = await response.json()
      if (response.ok) dispatch(actions.resolved(photographerId, data))
      else throw data.error
    } catch (error) {
      dispatch(actions.rejected(photographerId, error))
    }
  }
}

function setVoidIfUndefined(
  draft: PhotographerState,
  photographerId: T_PhotographerId
) {
  if (draft[photographerId] === undefined) {
    draft[photographerId] = { status: STATUS_TYPES.VOID }
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
          draft[action.payload.photographerId].data = undefined
          draft[action.payload.photographerId].status = STATUS_TYPES.REJECTED
          return
        }
        return
      },
    },
  },
})

export default reducer

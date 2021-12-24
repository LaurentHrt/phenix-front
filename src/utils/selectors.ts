import { T_PhotographerId } from '../models/Photographer'
import { RootState } from './store'
import { STATUS_TYPES } from './type'
import { I_PhotographersResponseData } from '../features/photographers'
import { I_PhotographerResponseData } from '../features/photographer'
import { I_MediasResponseData } from '../features/medias'

const voidPhotographerQuery: I_PhotographersResponseData = {
  status: STATUS_TYPES.VOID,
  data: [],
}
const voidMediaQuery: I_MediasResponseData = { status: STATUS_TYPES.VOID }

export const selectPhotographers = (
  state: RootState
): I_PhotographersResponseData => state.photographers

export const selectPhotographer =
  (photographerId: T_PhotographerId): any =>
  (state: RootState): I_PhotographerResponseData => {
    return (
      state.photographer[photographerId] ?? {
        photographerId: voidPhotographerQuery,
      }
    )
  }

export const selectMedias =
  (photographerId: T_PhotographerId): any =>
  (state: RootState): I_MediasResponseData => {
    return state.medias[photographerId] ?? { photographerId: voidMediaQuery }
  }

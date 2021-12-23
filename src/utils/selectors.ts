import { T_PhotographerId } from '../models/Photographer'
import { RootState } from './store'
import { STATUS_TYPES } from './type'
import { I_PhotographersQuery } from '../features/photographers'
import { I_PhotographerQuery } from '../features/photographer'
import { I_MediasQuery } from '../features/medias'

const voidPhotographerQuery: I_PhotographersQuery = {
  status: STATUS_TYPES.VOID,
  data: [],
}
const voidMediaQuery: I_MediasQuery = { status: STATUS_TYPES.VOID }

export const selectPhotographers = (state: RootState): I_PhotographersQuery =>
  state.photographers

export const selectPhotographer =
  (photographerId: T_PhotographerId): any =>
  (state: RootState): I_PhotographerQuery => {
    return (
      state.photographer[photographerId] ?? {
        photographerId: voidPhotographerQuery,
      }
    )
  }

export const selectMedias =
  (photographerId: T_PhotographerId): any =>
  (state: RootState): I_MediasQuery => {
    return state.medias[photographerId] ?? { photographerId: voidMediaQuery }
  }

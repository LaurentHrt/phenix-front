import { T_PhotographerId } from '../models/Photographer'
import { RootState } from './store'
import { STATUS_TYPES } from './type'

const voidPhotographer = { status: STATUS_TYPES.VOID }
const voidMedia = { status: STATUS_TYPES.VOID }

export const selectPhotographers = (state: RootState) => state.photographers

export const selectPhotographer =
  (photographerId: T_PhotographerId): any =>
  (state: RootState): any => {
    return state.photographer[photographerId] ?? voidPhotographer
  }

export const selectMedias =
  (photographerId: T_PhotographerId): any =>
  (state: RootState): any => {
    return state.medias[photographerId] ?? { photographerId: voidMedia }
  }

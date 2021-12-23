import { STATUS_TYPES } from './type'

const voidPhotographer = { status: STATUS_TYPES.VOID }
const voidMedia = { status: STATUS_TYPES.VOID }

export const selectPhotographers = (state) => state.photographers

export const selectPhotographer = (photographerId) => (state) => {
  return state.photographer[photographerId] ?? voidPhotographer
}

export const selectMedias = (photographerId) => (state) => {
  return state.medias[photographerId] ?? { photographerId: voidMedia }
}

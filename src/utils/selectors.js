const voidPhotographer = { status: 'void' }
const voidMedia = { status: 'void' }

export const selectPhotographers = (state) => state.photographers

export const selectPhotographer = (photographerId) => (state) => {
  return state.photographer[photographerId] ?? voidPhotographer
}

export const selectMedias = (photographerId) => (state) => {
  return state.medias[photographerId] ?? { photographerId: voidMedia }
}

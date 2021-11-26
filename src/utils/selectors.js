export const selectPhotographers = (state) => state.photographers

const voidPhotographer = { status: 'void' }
const voidMedias = { status: 'void' }

export const selectPhotographer = (photographerId) => (state) => {
  return state.photographer[photographerId] ?? voidPhotographer
}

export const selectMedias = (photographerId) => (state) => {
  return state.medias[photographerId] ?? voidMedias
}

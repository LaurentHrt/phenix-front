const voidPhotographers = []
const voidPhotographer = { status: 'void' }
const voidMedias = []

export const selectPhotographers = (state) =>
  state.photographers?.data ?? voidPhotographers

export const selectPhotographer = (photographerId) => (state) => {
  return state.photographer[photographerId] ?? voidPhotographer
}

export const selectMedias = (photographerId) => (state) => {
  return state.medias[photographerId]?.data?.slice() ?? voidMedias
}

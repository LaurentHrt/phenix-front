export const selectPhotographers = (state) => state.photographers

const voidPhotographer = { status: 'void' }
const voidMedias = []

export const selectPhotographer = (photographerId) => (state) => {
  return state.photographer[photographerId] ?? voidPhotographer
}

export const selectMedias = (photographerId, sort) => (state) => {
  return (
    state.medias[photographerId]?.data
      ?.slice()
      .sort((a, b) => a[sort] - b[sort]) ?? voidMedias
  )
}

export const selectPhotographers = (state) => state.photographers

const voidPhotographer = { status: 'void' }

export const selectPhotographer = (photographerId) => (state) => {
  return state.photographer[photographerId] ?? voidPhotographer
}

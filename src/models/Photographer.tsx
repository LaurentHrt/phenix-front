export type photographerId = number

export interface PhotographerModel {
  id: photographerId
  name: string
  city: string
  country: string
  tagline: string
  price: number
  portrait: string
}

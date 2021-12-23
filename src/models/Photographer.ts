export type T_PhotographerId = number
export type T_PhotographerName = string
export type T_PhotographerCity = string
export type T_PhotographerCountry = string
export type T_PhotographerTagline = string
export type T_PhotographerPrice = number
export type T_PhotographerPortrait = string

export interface I_PhotographerModel {
  id: T_PhotographerId
  name: T_PhotographerName
  city: T_PhotographerCity
  country: T_PhotographerCountry
  tagline: T_PhotographerTagline
  price: T_PhotographerPrice
  portrait: T_PhotographerPortrait
}

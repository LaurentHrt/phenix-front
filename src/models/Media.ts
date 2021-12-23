import { T_PhotographerId } from './Photographer'

export enum MEDIA_TYPES {
  IMAGE = 'image',
  VIDEO = 'video',
  GIF = 'gif',
}

export type T_MediaId = number
export type T_MediaPhotographerId = T_PhotographerId
export type T_MediaFilename = string
export type T_MediaType =
  | MEDIA_TYPES.IMAGE
  | MEDIA_TYPES.GIF
  | MEDIA_TYPES.VIDEO
export type T_MediaLikes = number
export type T_MediaTitle = string
export type T_MediaDate = string
export type T_MediaPrice = number
export type T_MediaAlt = string

export interface I_Media {
  id: T_MediaId
  photographerId: T_MediaPhotographerId
  filename: T_MediaFilename
  type: T_MediaType
  likes: T_MediaLikes
  title: T_MediaTitle
  date: T_MediaDate
  price: T_MediaPrice
  alt: T_MediaAlt
}

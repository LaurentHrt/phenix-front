export interface I_Error {
  error: string
}

export enum STATUS_TYPES {
  VOID = 'void',
  PENDING = 'pending',
  UPDATING = 'updating',
  REJECTED = 'rejected',
  RESOLVED = 'resolved',
}

export type I_StatusType =
  | STATUS_TYPES.VOID
  | STATUS_TYPES.PENDING
  | STATUS_TYPES.UPDATING
  | STATUS_TYPES.REJECTED
  | STATUS_TYPES.RESOLVED

export enum FILTER_TYPES {
  ALL = 'all',
  IMAGE = 'image',
  VIDEO = 'video',
  GIF = 'gif',
}

export enum FILTER_DISPLAY {
  ALL = 'Tout',
  IMAGE = 'Image',
  VIDEO = 'Vidéo',
  GIF = 'Gif',
}

export type IFilterType =
  | FILTER_TYPES.ALL
  | FILTER_TYPES.IMAGE
  | FILTER_TYPES.GIF
  | FILTER_TYPES.VIDEO

export enum SORT_TYPES {
  LIKE = 'like',
  NAME = 'name',
  TITLE = 'title',
  PRICE = 'price',
  DATE = 'date',
  RANDOM = 'random',
}

export enum SORT_DISPLAY {
  LIKE = 'Popularité',
  NAME = 'Nom',
  TITLE = 'Titre',
  PRICE = 'Prix',
  DATE = 'Date',
  RANDOM = 'Aléatoire',
}

export type ISortType =
  | SORT_TYPES.LIKE
  | SORT_TYPES.NAME
  | SORT_TYPES.TITLE
  | SORT_TYPES.PRICE
  | SORT_TYPES.DATE
  | SORT_TYPES.RANDOM

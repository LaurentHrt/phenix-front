export enum FILTER_TYPES {
  ALL = 'all',
  IMAGE = 'image',
  VIDEO = 'video',
  GIF = 'gif',
}

export enum FILTER_DISPLAY {
  ALL = 'Tout',
  IMAGE = 'Image',
  VIDEO = 'Video',
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

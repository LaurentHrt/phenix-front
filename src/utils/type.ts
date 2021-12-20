export enum FILTER_TYPES {
  ALL = 'all',
  IMAGE = 'image',
  VIDEO = 'video',
  GIF = 'gif',
}

export enum SORT_TYPES {
  LIKE = 'like',
  TITLE = 'title',
  PRICE = 'price',
  DATE = 'date',
  RANDOM = 'random',
}

export type ISortType =
  | SORT_TYPES.LIKE
  | SORT_TYPES.TITLE
  | SORT_TYPES.PRICE
  | SORT_TYPES.DATE
  | SORT_TYPES.RANDOM

export type IFilterType =
  | FILTER_TYPES.ALL
  | FILTER_TYPES.IMAGE
  | FILTER_TYPES.GIF
  | FILTER_TYPES.VIDEO

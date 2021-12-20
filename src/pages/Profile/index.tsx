import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { StyledProfilePage } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrUpdatePhotographer } from '../../features/photographer'
import { selectMedias, selectPhotographer } from '../../utils/selectors'
import { fetchOrUpdateMedias } from '../../features/medias'
import PhotographerBanner from '../../components/PhotographerBanner'
import Gallery from '../../components/Gallery'
import { MediaModel } from '../../models/Media'
import { PhotographerModel } from '../../models/Photographer'
import ControlBar from '../../components/ControlBar/index'
import {
  FILTER_DISPLAY,
  FILTER_TYPES,
  IFilterType,
  ISortType,
  SORT_DISPLAY,
  SORT_TYPES,
} from '../../utils/type'
import { IFilterItem } from '../../components/FilterButton'
import { ISortItem } from '../../components/SortButton'

export default function Profile() {
  const params = useParams()
  const photographerId = params.id
  const dispatch = useDispatch()
  const [sort, setSort] = useState<ISortType>(SORT_TYPES.LIKE)
  const [filter, setFilter] = useState<IFilterType>(FILTER_TYPES.ALL)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(fetchOrUpdatePhotographer(photographerId))
    dispatch(fetchOrUpdateMedias(photographerId))
  }, [dispatch, photographerId])

  const photographer = useSelector(selectPhotographer(photographerId))
  const profileData: PhotographerModel = photographer.data

  const medias: MediaModel[] = useSelector(selectMedias(photographerId))
  const displayedMedias: MediaModel[] = medias
    .filter(getFilterFunction(filter))
    .filter(getSearchFunction(search))
    .sort(getSortFunction(sort))
    .slice()

  const handleSortChange = (e: ISortType) => {
    setSort(e)
  }
  const handleFilterChange = (e: IFilterType) => {
    setFilter(e)
  }
  const handleSearchChange = (e: string) => {
    setSearch(e)
  }
  const handleClickReset = () => {
    setSort(SORT_TYPES.LIKE)
    setFilter(FILTER_TYPES.ALL)
    setSearch('')
  }

  const filterItems: IFilterItem[] = [
    { value: FILTER_TYPES.ALL, display: FILTER_DISPLAY.ALL },
    { value: FILTER_TYPES.IMAGE, display: FILTER_DISPLAY.IMAGE },
    { value: FILTER_TYPES.GIF, display: FILTER_DISPLAY.GIF },
    { value: FILTER_TYPES.VIDEO, display: FILTER_DISPLAY.VIDEO },
  ]

  const sortItems: ISortItem[] = [
    { value: SORT_TYPES.TITLE, display: SORT_DISPLAY.TITLE },
    { value: SORT_TYPES.DATE, display: SORT_DISPLAY.DATE },
    { value: SORT_TYPES.LIKE, display: SORT_DISPLAY.LIKE },
    { value: SORT_TYPES.PRICE, display: SORT_DISPLAY.PRICE },
    { value: SORT_TYPES.RANDOM, display: SORT_DISPLAY.RANDOM },
  ]

  function getSortFunction(sort: ISortType) {
    switch (sort) {
      case SORT_TYPES.LIKE:
        return (a: MediaModel, b: MediaModel) => b.likes - a.likes

      case SORT_TYPES.TITLE:
        return (a: MediaModel, b: MediaModel) => {
          if (a.title < b.title) return -1
          else return 1
        }

      case SORT_TYPES.DATE:
        return (a: MediaModel, b: MediaModel) => {
          if (new Date(a.date) < new Date(b.date)) return -1
          else return 1
        }

      case SORT_TYPES.PRICE:
        return (a: MediaModel, b: MediaModel) => a.price - b.price

      case SORT_TYPES.RANDOM:
        return (a: MediaModel, b: MediaModel) => 0.5 - Math.random()

      default:
        return (a: MediaModel, b: MediaModel) => a.likes - b.likes
    }
  }

  function getFilterFunction(filter: IFilterType) {
    if (filter === FILTER_TYPES.ALL) return () => true
    return (media: MediaModel) => media.type === filter
  }

  function getSearchFunction(search: string) {
    return (media: MediaModel) => {
      return (
        media.title.toLowerCase().includes(search.toLowerCase()) ||
        media.price.toString().includes(search.toLowerCase()) ||
        media.alt.toLowerCase().includes(search.toLowerCase())
      )
    }
  }

  return profileData ? (
    <StyledProfilePage>
      <PhotographerBanner
        name={profileData.name}
        city={profileData.city}
        country={profileData.country}
        tagline={profileData.tagline}
        portrait={profileData.portrait}
      />

      <ControlBar
        sort={{
          value: sort,
          handleChange: handleSortChange,
          items: sortItems,
        }}
        filter={{
          value: filter,
          handleChange: handleFilterChange,
          items: filterItems,
        }}
        search={{
          value: search,
          handleChange: handleSearchChange,
        }}
        handleClickReset={handleClickReset}
      />

      <Gallery medias={displayedMedias} />
    </StyledProfilePage>
  ) : null
}

import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { StyledProfilePage } from './style'
import { fetchOrUpdatePhotographer } from '../../features/photographer'
import { selectMedias, selectPhotographer } from '../../utils/selectors'
import {
  fetchOrUpdateMedias,
  I_MediasResponseData,
} from '../../features/medias'
import PhotographerBanner from '../../components/PhotographerBanner'
import Gallery from '../../components/Gallery'
import { I_Media, T_MediaType } from '../../models/Media'
import {
  I_PhotographerModel,
  T_PhotographerId,
} from '../../models/Photographer'
import ControlBar from '../../components/ControlBar/index'
import {
  FILTER_DISPLAY,
  FILTER_TYPES,
  IFilterType,
  ISortType,
  SORT_DISPLAY,
  SORT_TYPES,
  STATUS_TYPES,
} from '../../utils/type'
import { IFilterItem } from '../../components/FilterButton'
import { ISortItem } from '../../components/SortButton'
import Spinner from '../../components/Spinner'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { I_PhotographerResponseData } from '../../features/photographer'

export default function Profile() {
  const params = useParams()
  const photographerId: T_PhotographerId = params.id ? parseInt(params.id) : 0
  const dispatch = useAppDispatch()
  const [sort, setSort] = useState<ISortType>(SORT_TYPES.LIKE)
  const [filter, setFilter] = useState<IFilterType>(FILTER_TYPES.ALL)
  const [search, setSearch] = useState('')
  const [temporisation, setTemporisation] = useState(false)

  useEffect(() => {
    dispatch(fetchOrUpdatePhotographer(photographerId))
    dispatch(fetchOrUpdateMedias(photographerId))
  }, [dispatch, photographerId])

  const photographer: I_PhotographerResponseData = useAppSelector(
    selectPhotographer(photographerId)
  )
  const profileData: I_PhotographerModel | undefined = photographer.data

  const medias: I_MediasResponseData = useAppSelector(
    selectMedias(photographerId)
  )
  const displayedMedias: I_Media[] =
    medias.data
      ?.filter(getFilterFunction(filter))
      .filter(getSearchFunction(search))
      .sort(getSortFunction(sort))
      .slice() ?? []

  if (temporisation) {
    setTimeout(() => setTemporisation(false), 500)
  }

  const handleSortChange = async (e: ISortType) => {
    setTemporisation(true)
    setSort(e)
  }

  const handleFilterChange = (e: IFilterType) => {
    setTemporisation(true)
    setFilter(e)
  }
  const handleSearchChange = (e: string) => {
    setTemporisation(true)
    setSearch(e)
  }
  const handleClickReset = () => {
    setTemporisation(true)
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
        return (a: I_Media, b: I_Media) => b.likes - a.likes

      case SORT_TYPES.TITLE:
        return (a: I_Media, b: I_Media) => {
          if (a.title < b.title) return -1
          else return 1
        }

      case SORT_TYPES.DATE:
        return (a: I_Media, b: I_Media) => {
          if (new Date(a.date) > new Date(b.date)) return -1
          else return 1
        }

      case SORT_TYPES.PRICE:
        return (a: I_Media, b: I_Media) => a.price - b.price

      case SORT_TYPES.RANDOM:
        return (a: I_Media, b: I_Media) => 0.5 - Math.random()

      default:
        return (a: I_Media, b: I_Media) => a.likes - b.likes
    }
  }

  function getFilterFunction(filter: T_MediaType | IFilterType) {
    if (filter === FILTER_TYPES.ALL) return () => true
    return (media: I_Media) => media.type === filter
  }

  function getSearchFunction(search: string) {
    return (media: I_Media) => {
      return (
        media.title.toLowerCase().includes(search.toLowerCase()) ||
        media.price.toString().includes(search.toLowerCase()) ||
        media.alt.toLowerCase().includes(search.toLowerCase())
      )
    }
  }

  if (
    photographer.status === STATUS_TYPES.REJECTED ||
    medias.status === STATUS_TYPES.REJECTED
  ) {
    return <span>Il y a un problème de serveur</span>
  }

  const showSpinner = temporisation || medias.status === STATUS_TYPES.PENDING

  return (
    <StyledProfilePage>
      {profileData && (
        <PhotographerBanner
          name={profileData.name}
          city={profileData.city}
          country={profileData.country}
          tagline={profileData.tagline}
          portrait={profileData.portrait}
        />
      )}

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

      {showSpinner ? <Spinner /> : <Gallery medias={displayedMedias} />}
    </StyledProfilePage>
  )
}

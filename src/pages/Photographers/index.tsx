import { useEffect, useState } from 'react'
import PhotographerCard from '../../components/PhotographerCard'
import {
  fetchOrUpdatePhotographers,
  I_PhotographersResponseData,
} from '../../features/photographers'
import { StyledPhotographersContainer } from './style'
import { selectPhotographers } from '../../utils/selectors'
import { I_PhotographerModel } from '../../models/Photographer'
import ControlBar from '../../components/ControlBar'
import {
  ISortType,
  SORT_DISPLAY,
  SORT_TYPES,
  STATUS_TYPES,
} from '../../utils/type'
import { ISortItem } from '../../components/SortButton'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'

export default function Photographers() {
  const dispatch = useAppDispatch()
  const [sort, setSort] = useState<ISortType>(SORT_TYPES.NAME)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(fetchOrUpdatePhotographers)
  }, [dispatch])

  const photographers: I_PhotographersResponseData =
    useAppSelector(selectPhotographers)
  const displayedPhotographers: I_PhotographerModel[] = photographers.data
    .filter(getSearchFunction(search))
    .sort(getSortFunction(sort))
    .slice()

  const handleSortChange = (e: ISortType) => {
    setSort(e)
  }
  const handleSearchChange = (e: string) => {
    setSearch(e)
  }
  const handleClickReset = () => {
    setSort(SORT_TYPES.NAME)
    setSearch('')
  }

  const sortItems: ISortItem[] = [
    { value: SORT_TYPES.NAME, display: SORT_DISPLAY.NAME },
    { value: SORT_TYPES.PRICE, display: SORT_DISPLAY.PRICE },
    { value: SORT_TYPES.RANDOM, display: SORT_DISPLAY.RANDOM },
  ]

  function getSortFunction(sort: ISortType) {
    switch (sort) {
      case SORT_TYPES.NAME:
        return (a: I_PhotographerModel, b: I_PhotographerModel) => {
          if (a.name < b.name) return -1
          else return 1
        }

      case SORT_TYPES.PRICE:
        return (a: I_PhotographerModel, b: I_PhotographerModel) =>
          a.price - b.price

      case SORT_TYPES.RANDOM:
        return (a: I_PhotographerModel, b: I_PhotographerModel) =>
          0.5 - Math.random()

      default:
        return (a: I_PhotographerModel, b: I_PhotographerModel) => {
          if (a.name < b.name) return -1
          else return 1
        }
    }
  }

  function getSearchFunction(search: string) {
    return (media: I_PhotographerModel) => {
      return (
        media.name.toLowerCase().includes(search.toLowerCase()) ||
        media.country.toLowerCase().includes(search.toLowerCase()) ||
        media.city.toLowerCase().includes(search.toLowerCase()) ||
        media.price.toString().includes(search.toLowerCase()) ||
        media.tagline.toLowerCase().includes(search.toLowerCase())
      )
    }
  }

  if (photographers.status === STATUS_TYPES.REJECTED) {
    return <span>Il y a un problème de serveur</span>
  }

  return (
    <>
      <ControlBar
        sort={{ value: sort, items: sortItems, handleChange: handleSortChange }}
        search={{ value: search, handleChange: handleSearchChange }}
        handleClickReset={handleClickReset}
      />
      <StyledPhotographersContainer>
        {displayedPhotographers?.map((photographer: I_PhotographerModel) => (
          <PhotographerCard
            key={photographer.id}
            id={photographer.id}
            name={photographer.name}
            city={photographer.city}
            country={photographer.country}
            tagline={photographer.tagline}
            price={photographer.price}
            portrait={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_PORTRAIT}${photographer.portrait}`}
          />
        ))}
      </StyledPhotographersContainer>
    </>
  )
}

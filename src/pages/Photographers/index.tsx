import { useEffect, useState } from 'react'
import PhotographerCard from '../../components/PhotographerCard'
import { fetchOrUpdatePhotographers } from '../../features/photographers'
import { StyledPhotographersContainer } from './style'
import { selectPhotographers } from '../../utils/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { PhotographerModel } from '../../models/Photographer'
import ControlBar from '../../components/ControlBar'
import { ISortType, SORT_DISPLAY, SORT_TYPES } from '../../utils/type'
import { ISortItem } from '../../components/SortButton'

export default function Photographers() {
  const dispatch = useDispatch()
  const [sort, setSort] = useState<ISortType>(SORT_TYPES.NAME)
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(fetchOrUpdatePhotographers)
  }, [dispatch])

  const photographers = useSelector(selectPhotographers)
  const displayedPhotographers: PhotographerModel[] = photographers.data
    ?.filter(getSearchFunction(search))
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
        return (a: PhotographerModel, b: PhotographerModel) => {
          if (a.name < b.name) return -1
          else return 1
        }

      case SORT_TYPES.PRICE:
        return (a: PhotographerModel, b: PhotographerModel) => a.price - b.price

      case SORT_TYPES.RANDOM:
        return (a: PhotographerModel, b: PhotographerModel) =>
          0.5 - Math.random()

      default:
        return (a: PhotographerModel, b: PhotographerModel) => {
          if (a.name < b.name) return -1
          else return 1
        }
    }
  }

  function getSearchFunction(search: string) {
    return (media: PhotographerModel) => {
      return (
        media.name.toLowerCase().includes(search.toLowerCase()) ||
        media.country.toLowerCase().includes(search.toLowerCase()) ||
        media.city.toLowerCase().includes(search.toLowerCase()) ||
        media.price.toString().includes(search.toLowerCase()) ||
        media.tagline.toLowerCase().includes(search.toLowerCase())
      )
    }
  }

  if (photographers.status === 'rejected') {
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
        {displayedPhotographers?.map((photographer: PhotographerModel) => (
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

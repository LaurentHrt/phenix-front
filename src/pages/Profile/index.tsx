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
import { filterValues, sortValues } from '../../utils/type'

export default function Profile() {
  const params = useParams()
  const photographerId = params.id
  const dispatch = useDispatch()
  const [sort, setSort] = useState<sortValues>('likes')
  const [filter, setFilter] = useState<filterValues>('all')
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

  const handleSortChange = (e: sortValues) => {
    setSort(e)
  }
  const handleFilterChange = (e: filterValues) => {
    setFilter(e)
  }
  const handleSearchChange = (e: string) => {
    setSearch(e)
  }
  const handleClickReset = () => {
    setSort('likes')
    setFilter('all')
    setSearch('')
  }

  function getSortFunction(sort: sortValues) {
    switch (sort) {
      case 'likes':
        return (a: MediaModel, b: MediaModel) => b.likes - a.likes

      case 'title':
        return (a: MediaModel, b: MediaModel) => {
          if (a.title < b.title) return -1
          else return 1
        }

      case 'date':
        return (a: MediaModel, b: MediaModel) => {
          if (new Date(a.date) < new Date(b.date)) return -1
          else return 1
        }

      case 'price':
        return (a: MediaModel, b: MediaModel) => a.price - b.price

      case 'random':
        return (a: MediaModel, b: MediaModel) => 0.5 - Math.random()

      default:
        return (a: MediaModel, b: MediaModel) => a.likes - b.likes
    }
  }

  function getFilterFunction(filter: filterValues) {
    switch (filter) {
      case 'image':
        return (media: MediaModel) => {
          const ext = media.filename.split('.').pop()
          return (
            ext === 'png' || ext === 'webp' || ext === 'jpg' || ext === 'jpeg'
          )
        }

      case 'gif':
        return (media: MediaModel) => {
          const ext = media.filename.split('.').pop()
          return ext === 'gif'
        }

      case 'video':
        return (media: MediaModel) => {
          const ext = media.filename.split('.').pop()
          return ext === 'mp4'
        }

      default:
        return () => true
    }
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
        sortValue={sort}
        handleSortChange={handleSortChange}
        filterValue={filter}
        handleFilterChange={handleFilterChange}
        searchValue={search}
        handleSearchChange={handleSearchChange}
        handleClickReset={handleClickReset}
      />

      <Gallery medias={displayedMedias} />
    </StyledProfilePage>
  ) : null
}

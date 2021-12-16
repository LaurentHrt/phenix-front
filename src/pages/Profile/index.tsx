import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { StyledControlsContainer, StyledProfilePage } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrUpdatePhotographer } from '../../features/photographer'
import { selectMedias, selectPhotographer } from '../../utils/selectors'
import { fetchOrUpdateMedias } from '../../features/medias'
import SortButton from '../../components/SortButton'
import PhotographerBanner from '../../components/PhotographerBanner'
import SearchBar from '../../components/SearchBar/SearchBar'
import Gallery from '../../components/Gallery'
import FilterButton from '../../components/FilterButton'
import { MediaModel } from '../../models/Media'
import SimpleButton from '../../components/SimpleButton/index'

export default function Profile() {
  const params = useParams()
  const photographerId = params.id
  const dispatch = useDispatch()
  const [sort, setSort] = useState('likes')
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    dispatch(fetchOrUpdatePhotographer(photographerId))
    dispatch(fetchOrUpdateMedias(photographerId))
  }, [dispatch, photographerId])

  const photographer = useSelector(selectPhotographer(photographerId))
  const profileData = photographer.data ?? null

  const medias = useSelector(selectMedias(photographerId))

  const handleSortChange = (e: string) => {
    setSort(e)
  }
  const handleFilterChange = (e: string) => {
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

  function getSortFunction(sort: string) {
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

  function getFilterFunction(filter: string) {
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

      <StyledControlsContainer>
        <SortButton onSortChange={handleSortChange} />
        <FilterButton onFilterChange={handleFilterChange} />
        <SearchBar onSearchChange={handleSearchChange} />
        <SimpleButton text="Réinitialiser" onClick={handleClickReset} />
      </StyledControlsContainer>

      <Gallery
        medias={medias}
        sortFunction={getSortFunction(sort)}
        filterFunction={getFilterFunction(filter)}
        searchFunction={getSearchFunction(search)}
      />
    </StyledProfilePage>
  ) : null
}

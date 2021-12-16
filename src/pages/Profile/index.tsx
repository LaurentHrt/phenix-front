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

export default function Profile() {
  const params = useParams()
  const photographerId = params.id
  const dispatch = useDispatch()
  const [sort, setSort] = useState('likes')
  const [filter, setFilter] = useState('all')

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
        <SearchBar />
      </StyledControlsContainer>

      <Gallery medias={medias} sort={sort} filter={filter} />
    </StyledProfilePage>
  ) : null
}

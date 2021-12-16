import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { StyledProfilePage } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrUpdatePhotographer } from '../../features/photographer'
import { selectMedias, selectPhotographer } from '../../utils/selectors'
import { fetchOrUpdateMedias } from '../../features/medias'
import SortButton from '../../components/SortButton'
import PhotographerBanner from '../../components/PhotographerBanner'
import SearchBar from '../../components/SearchBar/SearchBar'
import Gallery from '../../components/Gallery'

export default function Profile() {
  const params = useParams()
  const photographerId = params.id
  const dispatch = useDispatch()
  const [sort, setSort] = useState('likes')

  useEffect(() => {
    dispatch(fetchOrUpdatePhotographer(photographerId))
    dispatch(fetchOrUpdateMedias(photographerId))
  }, [dispatch, photographerId])

  const photographer = useSelector(selectPhotographer(photographerId))
  const profileData = photographer.data ?? null

  const medias = useSelector(selectMedias(photographerId, sort))

  const handleSortChange = (e: string) => {
    setSort(e)
    console.log(medias)
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

      <section className="controls">
        <SortButton onSortChange={handleSortChange} />
        <SearchBar />
      </section>

      <Gallery medias={medias} sort={sort} />
    </StyledProfilePage>
  ) : null
}

import { useEffect } from 'react'
import { useParams } from 'react-router'
import { StyledMediaList, StyledProfilePage } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrUpdatePhotographer } from '../../features/photographer'
import { selectMedias, selectPhotographer } from '../../utils/selectors'
import MediaCard from '../../components/MediaCard'
import { MediaModel } from '../../models/Media'
import { fetchOrUpdateMedias } from '../../features/medias'
import SortButton from '../../components/SortButton'
import PhotographerBanner from '../../components/PhotographerBanner'

export default function Profile() {
  const params = useParams()
  const photographerId = params.id
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrUpdatePhotographer(photographerId))
    dispatch(fetchOrUpdateMedias(photographerId))
  }, [dispatch, photographerId])

  const photographer = useSelector(selectPhotographer(photographerId))
  const profileData = photographer.data ?? null

  const medias = useSelector(selectMedias(photographerId))
  const mediasData = medias.data ?? null

  const halfIndex = medias.data ? Math.ceil(medias.data.length / 2) : 0

  const handleSortChange = (e: string) => {
    console.log(e)
    console.log(mediasData)
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

      <section className="filter">
        <SortButton onSortChange={handleSortChange} />
      </section>

      <StyledMediaList>
        <div>
          {mediasData?.slice(0, halfIndex).map((media: MediaModel) => (
            <MediaCard
              key={media.id}
              title={media.title}
              filename={media.filename}
              price={media.price}
              likes={media.likes}
              alt={media.alt}
            />
          ))}
        </div>
        <div>
          {mediasData?.slice(halfIndex).map((media: MediaModel) => (
            <MediaCard
              key={media.id}
              title={media.title}
              filename={media.filename}
              price={media.price}
              likes={media.likes}
              alt={media.alt}
            />
          ))}
        </div>
      </StyledMediaList>
    </StyledProfilePage>
  ) : null
}

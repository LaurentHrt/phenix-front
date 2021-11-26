import { useEffect } from 'react'
import { useParams } from 'react-router'
import { StyledBanner, StyledProfilePage } from './style'
import Button from '../../components/Button'
import Dropdown from '../../components/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrUpdatePhotographer } from '../../features/photographer'
import { fetchOrUpdateMedias } from '../../features/medias'
import { selectPhotographer } from '../../utils/selectors'

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

  return profileData ? (
    <StyledProfilePage>
      <StyledBanner>
        <Button text="Contactez-moi" />

        <div className="card-banner-photograph__textContainer">
          <h1 className="card-banner-photograph__name">{profileData.name}</h1>
          <div className="card-banner-photograph__city">
            {profileData.city}, {profileData.country}
          </div>
          <div className="card-banner-photograph__tagline">
            {profileData.tagline}
          </div>
          <div className="tag-list card-banner-photograph__tags"></div>
        </div>

        <div className="card-banner-photograph__portrait">
          <img
            src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_PORTRAIT}${profileData.portrait}`}
            alt=""
          />
        </div>
      </StyledBanner>

      <section className="filter">
        <span id="trierPar">Trier par </span>
        <Dropdown />
      </section>

      <section className="media-list">
        {/* {profileData.media.map((mediaId) => (
          <MediaCard />
        ))} */}
      </section>

      <section className="info-box">
        <p className="info-box__like"></p>
        <p className="info-box__price"></p>
      </section>
    </StyledProfilePage>
  ) : null
}

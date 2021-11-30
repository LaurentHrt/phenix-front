import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { StyledBanner, StyledMediaList, StyledProfilePage } from './style'
import Button from '../../components/Button'
import Dropdown from '../../components/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrUpdatePhotographer } from '../../features/photographer'
import { selectMedias, selectPhotographer } from '../../utils/selectors'
import MediaCard from '../../components/MediaCard'
import { MediaModel } from '../../models/Media'
import { fetchOrUpdateMedias } from '../../features/medias'
import ReactModal from 'react-modal'

export default function Profile() {
  const params = useParams()
  const photographerId = params.id
  const dispatch = useDispatch()
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    dispatch(fetchOrUpdatePhotographer(photographerId))
    dispatch(fetchOrUpdateMedias(photographerId))
  }, [dispatch, photographerId])

  const photographer = useSelector(selectPhotographer(photographerId))
  const profileData = photographer.data ?? null

  const medias = useSelector(selectMedias(photographerId))
  const mediasData = medias.data ?? null

  const handleOpenModal = () => {
    setModalIsOpen(true)
  }
  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  return profileData ? (
    <StyledProfilePage>
      <StyledBanner>
        {/* <Button text="Contactez-moi" onClick={handleOpenModal} /> */}
        <button onClick={handleOpenModal}>Contact</button>

        <ReactModal
          isOpen={modalIsOpen}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          shouldCloseOnOverlayClick={true}
        >
          <p>Modal text!</p>
          <button onClick={handleCloseModal}>Close Modal</button>
        </ReactModal>

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

      <StyledMediaList>
        {mediasData?.map((media: MediaModel) => (
          <MediaCard
            key={media.id}
            title={media.title}
            filename={media.filename}
            price={media.price}
            likes={media.likes}
            alt={media.alt}
          />
        ))}
      </StyledMediaList>
      <section className="info-box">
        <p className="info-box__like"></p>
        <p className="info-box__price"></p>
      </section>
    </StyledProfilePage>
  ) : null
}

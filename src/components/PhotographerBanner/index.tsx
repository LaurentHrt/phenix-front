import { StyledBanner } from './style'
import SimpleButton from '../SimpleButton'
import ContactModal from '../ContactModal'
import { useState } from 'react'

interface PhotographerBannerProps {
  name: string
  portrait: string
  city: string
  country: string
  tagline: string
}

export default function PhotographerBanner({
  name,
  portrait,
  city,
  country,
  tagline,
}: PhotographerBannerProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const handleOpenModal = () => {
    setModalIsOpen(true)
  }
  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  return (
    <StyledBanner>
      <SimpleButton onClick={handleOpenModal} text="Contact" />

      <ContactModal isOpen={modalIsOpen} handleCloseModal={handleCloseModal} />

      <div className="card-banner-photograph__textContainer">
        <h1 className="card-banner-photograph__name">{name}</h1>
        <div className="card-banner-photograph__city">
          {city}, {country}
        </div>
        <div className="card-banner-photograph__tagline">{tagline}</div>
      </div>

      <div className="card-banner-photograph__portrait">
        <img
          src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_PORTRAIT}${portrait}`}
          alt=""
        />
      </div>
    </StyledBanner>
  )
}

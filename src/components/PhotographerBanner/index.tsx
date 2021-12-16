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
      <ContactModal isOpen={modalIsOpen} handleCloseModal={handleCloseModal} />

      <div className="portrait">
        <img
          src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_PORTRAIT}${portrait}`}
          alt=""
        />
      </div>

      <div className="textContainer">
        <h1 className="name">{name}</h1>
        <div className="city">
          {city}, {country}
        </div>
        <div className="tagline">{tagline}</div>
        <SimpleButton onClick={handleOpenModal} text="Contact" />
      </div>
    </StyledBanner>
  )
}

import { StyledBanner } from './style'
import SimpleButton from '../SimpleButton'
import ContactModal from '../ContactModal'
import { useState } from 'react'
import NewMediaModal from '../NewMediaModal'

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
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false)
  const [newMediaModalIsOpen, setNewMediaModalIsOpen] = useState(false)

  const handleOpenContactModal = () => {
    setContactModalIsOpen(true)
  }
  const handleCloseContactModal = () => {
    setContactModalIsOpen(false)
  }
  const handleOpenNewMediaModal = () => {
    setNewMediaModalIsOpen(true)
  }
  const handleCloseNewMediaModal = () => {
    setNewMediaModalIsOpen(false)
  }

  return (
    <StyledBanner>
      <ContactModal
        isOpen={contactModalIsOpen}
        handleCloseModal={handleCloseContactModal}
      />
      <NewMediaModal
        isOpen={newMediaModalIsOpen}
        handleCloseModal={handleCloseNewMediaModal}
      />

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
        <SimpleButton onClick={handleOpenContactModal} text="Contact" />
        <SimpleButton onClick={handleOpenNewMediaModal} text="Nouveau média" />
      </div>
    </StyledBanner>
  )
}

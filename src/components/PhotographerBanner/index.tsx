import { StyledBanner, StyledName, StyledPortrait } from './style'
import SimpleButton from '../SimpleButton'
import ContactModal from '../ContactModal'
import { useState } from 'react'

interface PhotographerBannerProps {
  name?: string
  portrait?: string
  city?: string
  country?: string
  tagline?: string
}

export default function PhotographerBanner({
  name,
  portrait,
  city,
  country,
  tagline,
}: PhotographerBannerProps) {
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false)
  const imageUrl = new URL(
    `../../../data/images/portrait/${portrait}`,
    import.meta.url
  ).href

  const handleOpenContactModal = () => {
    setContactModalIsOpen(true)
  }
  const handleCloseContactModal = () => {
    setContactModalIsOpen(false)
  }

  return (
    <StyledBanner>
      <ContactModal
        isOpen={contactModalIsOpen}
        handleCloseModal={handleCloseContactModal}
      />

      <StyledPortrait>
        <img src={imageUrl} alt="portrait" />
      </StyledPortrait>

      <div>
        <StyledName>{name}</StyledName>
        <div className="city">
          {city}, {country}
        </div>
        <div className="tagline">{tagline}</div>
        <SimpleButton onClick={handleOpenContactModal} text="Contact" />
      </div>
    </StyledBanner>
  )
}

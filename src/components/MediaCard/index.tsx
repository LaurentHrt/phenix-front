import { device } from '../../utils/style/responsive'
import { StyledMediaCard, StyledSlidingBanner } from './style'
import { useState } from 'react'

interface MediaCardProps {
  title: string
  filename: string
  type: string
  price: number
  likes: number
  alt: string
}

export default function MediaCard({
  title,
  filename,
  type,
  price,
  likes,
  alt,
}: MediaCardProps) {
  const [loaded, setLoaded] = useState(false)
  const [selected, setSelected] = useState(false)
  const isVideo = type === 'video'

  const numberWithSpaces = (x: number) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  const handlePictureLoaded = (e: any) => {
    console.log('loaded: ', e.target.currentSrc)
    setLoaded(true)
  }

  const handleClick = (e: any) => {
    console.log('click: ', e.target.currentSrc)
    setSelected(true)
  }

  return (
    <StyledMediaCard onClick={(e) => handleClick(e)}>
      {isVideo ? (
        <video loop autoPlay>
          <source
            src={`http://${import.meta.env.VITE_API}:${
              import.meta.env.VITE_PORT
            }${import.meta.env.VITE_PATH_TO_MEDIA_SMALL}${filename}`}
            type="video/mp4"
          />
        </video>
      ) : (
        <img
          src={`http://${import.meta.env.VITE_API}:${
            import.meta.env.VITE_PORT
          }${import.meta.env.VITE_PATH_TO_MEDIA_MEDIUM}${filename}`}
          alt={alt}
          onLoad={handlePictureLoaded}
        />
      )}
      <StyledSlidingBanner className="slidingBanner">
        <div>{title}</div>
        <div>{numberWithSpaces(price)}€</div>
      </StyledSlidingBanner>
    </StyledMediaCard>
  )
}

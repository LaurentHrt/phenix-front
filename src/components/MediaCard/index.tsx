import { device } from '../../utils/style/responsive'
import { StyledMediaCard, StyledSlidingBanner } from './style'

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
  const isVideo = type === 'video'

  function numberWithSpaces(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }

  return (
    <StyledMediaCard>
      {isVideo ? (
        <video loop autoPlay>
          <source
            src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_SMALL}${filename}`}
            type="video/mp4"
          />
        </video>
      ) : (
        <picture>
          <source
            srcSet={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_MEDIUM}${filename}`}
            media={device.smallDesktop}
          />
          <img
            src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_SMALL}${filename}`}
            alt={alt}
          />
        </picture>
      )}
      <StyledSlidingBanner className="slidingBanner">
        <div>{title}</div>
        <div>{numberWithSpaces(price)}€</div>
      </StyledSlidingBanner>
    </StyledMediaCard>
  )
}

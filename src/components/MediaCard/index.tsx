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
  const url = new URL(`../../../data/images/media/${filename}`, import.meta.url)
    .href

  const numberWithSpaces = (x: number) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  const handlePictureLoaded = (e: any) => {
    console.log('loaded: ', e.target.currentSrc)
  }

  const handleClick = (e: any) => {
    console.log('click: ', e.target.currentSrc)
  }

  return (
    <StyledMediaCard onClick={(e) => handleClick(e)}>
      {isVideo ? (
        <video loop autoPlay>
          <source src={url} type="video/mp4" />
        </video>
      ) : (
        <img src={url} alt={alt} onLoad={handlePictureLoaded} />
      )}
      <StyledSlidingBanner className="slidingBanner">
        <div>{title}</div>
        <div>{numberWithSpaces(price)}€</div>
      </StyledSlidingBanner>
    </StyledMediaCard>
  )
}

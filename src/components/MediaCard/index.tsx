import { device } from '../../utils/style/responsive'
import { StyledHider, StyledMediaCard, StyledSlidingBanner } from './style'
import { useState } from 'react'
import { useImage } from 'react-image'

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
  const [status, setStatus] = useState('loading')
  const isVideo = type === 'video'

  const numberWithSpaces = (x: number) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  const handlePictureLoaded = (e: any) => {
    console.log('loaded: ', e)
    setStatus('loaded')
  }

  function Image() {
    const { src, isLoading } = useImage({
      srcList: `http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_MEDIUM}${filename}`,
    })
    return <img src={src} alt="" />
  }

  return (
    <>
      {/* {status === 'loading' ?? <StyledHider>{status}</StyledHider>} */}
      <StyledMediaCard>
        {!isVideo && <Image />}
        {/* {isVideo ? (
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
              onLoad={(e) => handlePictureLoaded(e)}
            />
            <img
              src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_SMALL}${filename}`}
              alt={alt}
              onLoad={(e) => handlePictureLoaded(e)}
            />
          </picture>
        )} */}
        <StyledSlidingBanner>
          <div>{title}</div>
          <div>{numberWithSpaces(price)}€</div>
        </StyledSlidingBanner>
      </StyledMediaCard>
    </>
  )
}

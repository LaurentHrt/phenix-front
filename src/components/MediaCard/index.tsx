import { device } from '../../utils/style/responsive'
import { StyledHider, StyledMediaCard, StyledSlidingBanner } from './style'
import { Suspense, useEffect, useRef, useState } from 'react'
import { useImage } from 'react-image'
import Spinner from '../Spinner'
import { ContentCopy } from '@mui/icons-material'

interface MediaCardProps {
  title: string
  filename: string
  type: string
  price: number
  likes: number
  alt: string
}

const usePrevious = <T extends any>(value: T) => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  }, [value])
  return ref.current
}
const useRequestAnimationFrame = (): [(cb: () => void) => void, Function] => {
  const handles = useRef<number[]>([])
  const _raf = (cb: () => void) => {
    handles.current.push(requestAnimationFrame(cb))
  }
  const _resetRaf = () => {
    handles.current.forEach((id) => cancelAnimationFrame(id))
    handles.current = []
  }

  return [_raf, _resetRaf]
}

type ImageProps = {
  src: string
  alt?: string
  transitionDuration?: number
  curve?: string
}

const CrossFadeImage = (props: ImageProps) => {
  const { src, alt, transitionDuration = 0.35, curve = 'ease' } = props
  const oldSrc = usePrevious(src)
  const [topSrc, setTopSrc] = useState<string>(src)
  const [bottomSrc, setBottomSrc] = useState<string>('')
  const [bottomOpacity, setBottomOpacity] = useState(0)
  const [display, setDisplay] = useState(false)
  const [raf, resetRaf] = useRequestAnimationFrame()

  useEffect(() => {
    if (src !== oldSrc) {
      resetRaf()
      setTopSrc('')
      setBottomSrc('')

      raf(() => {
        setTopSrc(src)
        setBottomSrc(oldSrc!)
        setBottomOpacity(99)

        raf(() => {
          setBottomOpacity(0)
        })
      })
    }
  }, [])

  return (
    <div
      className="imgContainer"
      // style={{
      //   position: 'relative',
      //   height: '100%',
      // }}
    >
      {topSrc && (
        <img
          style={{
            // position: 'absolute',
            opacity: display ? '100%' : 0,
            transition: `opacity ${transitionDuration}s ${curve}`,
          }}
          onLoad={() => setDisplay(true)}
          src={topSrc}
          alt={alt}
        />
      )}
      {bottomSrc && (
        <img
          style={{
            // position: 'absolute',
            opacity: bottomOpacity + '%',
            transition: `opacity ${transitionDuration}s ${curve}`,
          }}
          src={bottomSrc}
          alt={alt}
        />
      )}
    </div>
  )
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
  const isVideo = type === 'video'

  const numberWithSpaces = (x: number) =>
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')

  const handlePictureLoaded = (e: any) => {
    console.log('loaded: ', e)
    setLoaded(true)
  }

  return (
    <>
      {/* {status === 'loading' ?? <StyledHider>{status}</StyledHider>} */}
      <StyledMediaCard>
        {isVideo ? null : (
          // <video loop autoPlay>
          //   <source
          //     src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_SMALL}${filename}`}
          //     type="video/mp4"
          //   />
          // </video>
          // <picture>
          //   <source
          //     srcSet={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_MEDIUM}${filename}`}
          //     media={device.smallDesktop}
          //     onLoad={(e) => handlePictureLoaded(e)}
          //   />
          //   <img
          //     src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_MEDIUM}${filename}`}
          //     alt={alt}
          //   />
          // </picture>
          // <Suspense fallback={<Spinner />}>

          <CrossFadeImage
            src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_MEDIUM}${filename}`}
            // onLoad={(e) => handlePictureLoaded(e)}
            alt=""
          />

          // </Suspense>
        )}
        {/* <StyledSlidingBanner>
          <div>{title}</div>
          <div>{numberWithSpaces(price)}€</div>
        </StyledSlidingBanner> */}
      </StyledMediaCard>
    </>
  )
}

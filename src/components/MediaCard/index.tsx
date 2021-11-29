import { StyledMediaCard } from './style'

interface MediaCardProps {
  title: string
  filename: string
  price: number
  likes: number
  alt: string
}

export default function MediaCard({
  title,
  filename,
  price,
  likes,
  alt,
}: MediaCardProps) {
  const isVideo = filename?.split('.').pop() === 'mp4'

  return (
    <StyledMediaCard>
      <div className="media">
        {isVideo ? (
          <video controls loop>
            <source
              src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_SMALL}${filename}`}
              type="video/mp4"
            />
          </video>
        ) : (
          <picture>
            <source
              srcSet={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_MEDIUM}${filename}`}
              media="(min-width: 768px)"
            />
            <img
              src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_SMALL}${filename}`}
              alt={alt}
            />
          </picture>
        )}
      </div>
      <div className="textContainer">
        <div className="title">{title}</div>
        <div className="price">{price}€</div>
        <div className="likes">
          {likes}
          {'<3'}
        </div>
      </div>
    </StyledMediaCard>
  )
}

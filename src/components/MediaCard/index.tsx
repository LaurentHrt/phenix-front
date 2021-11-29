import { StyledMediaCard } from './style'

interface MediaCardProps {
  title: string
  image: string
  price: number
  likes: number
  alt: string
}

export default function MediaCard({
  title,
  image,
  price,
  likes,
  alt,
}: MediaCardProps) {
  return (
    <StyledMediaCard>
      <div className="media">
        <picture>
          <source
            srcSet={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_MEDIUM}${image}`}
            media="(min-width: 768px)"
          />
          <img
            src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_MEDIA_SMALL}${image}`}
            alt={alt}
          />
        </picture>
      </div>
      <div className="textContainer">
        <div className="title">{title}</div>
        <div className="price">{price}€</div>
        <div className="likes">
          {likes} <i className="far fa-heart"></i>
        </div>
      </div>
    </StyledMediaCard>
  )
}

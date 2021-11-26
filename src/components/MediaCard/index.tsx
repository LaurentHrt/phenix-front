import styled from 'styled-components'
import { StyledMediaCard } from './style'

interface MediaCardProps {
  title: String
  mediaId: Number
  price: String
  likes: Number
}

export default function MediaCard({
  title,
  mediaId,
  price,
  likes,
}: MediaCardProps) {
  return (
    <StyledMediaCard>
      <div className="media">
        <picture>
          <source
            srcSet={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}/images/1_small/${mediaId}.jpg`}
            media="(min-width: 768px)"
          />
          <img
            src={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}/images/1_small/${mediaId}.jpg`}
            alt="Personne au sommet d'une montagne"
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

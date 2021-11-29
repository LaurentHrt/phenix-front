import { Link } from 'react-router-dom'
import Tag from '../Tag'
import {
  StyledCity,
  StyledName,
  StyledPhotographerCard,
  StyledPortrait,
  StyledPrice,
  StyledTagContainer,
  StyledTagline,
} from './style'

interface PhotographerCardProps {
  id: number
  name: string
  city: string
  country: string
  tags: string[]
  tagline: string
  price: number
  portrait: string
}

export default function PhotographerCard({
  id,
  name,
  city,
  country,
  tags,
  tagline,
  price,
  portrait,
}: PhotographerCardProps) {
  return (
    <StyledPhotographerCard>
      <Link to={`/profile/${id}`}>
        <StyledPortrait>
          <img src={portrait} alt="" />
        </StyledPortrait>
        <StyledName>{name}</StyledName>
      </Link>
      <StyledCity>
        {city}, {country}
      </StyledCity>
      <StyledTagline>{tagline}</StyledTagline>
      <StyledPrice>{price}</StyledPrice>
      <StyledTagContainer>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </StyledTagContainer>
    </StyledPhotographerCard>
  )
}

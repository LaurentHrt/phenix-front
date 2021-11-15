import { useEffect, useState } from 'react'
import PhotographerCard from '../../components/PhotographerCard'
import { StyledPhotographersContainer } from './style'

export default function Photographers() {
  const [data, setData] = useState({
    photographers: [
      {
        id: 0,
        name: '',
        city: '',
        tags: [],
        tagline: '',
        price: 0,
        portrait: '',
      },
    ],
  })

  useEffect(() => {
    ;(async () => {
      const response = await fetch('./photographers.json')
      const data = await response.json()
      setData(data)
    })()
  })

  return (
    <StyledPhotographersContainer>
      {data.photographers.map((photographer) => (
        <PhotographerCard
          key={photographer.id}
          id={photographer.id}
          name={photographer.name}
          city={photographer.city}
          tags={photographer.tags}
          tagline={photographer.tagline}
          price={photographer.price}
          portrait={photographer.portrait}
        />
      ))}
    </StyledPhotographersContainer>
  )
}

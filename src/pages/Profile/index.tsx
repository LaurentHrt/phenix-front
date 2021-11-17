import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { PhotographerCardProps } from '../../components/PhotographerCard'
import Tag from '../../components/Tag'
import { StyledBanner, StyledProfilePage } from './style'
import { StyledButton } from '../../components/Button/style'
import Button from '../../components/Button'
import Dropdown from '../../components/Dropdown'

export default function Profile() {
  const params = useParams()
  const id = parseInt(params.id || '')
  const [data, setData] = useState({
    id: 0,
    name: '',
    city: '',
    country: '',
    tags: [],
    tagline: '',
    price: 0,
    portrait: '',
  })

  useEffect(() => {
    ;(async () => {
      const response = await fetch('../photographers.json')
      const data = await response.json()
      const filteredData = data.photographers.filter(
        (photographer: PhotographerCardProps) => photographer.id === id
      )

      setData(filteredData[0])
    })()
  })

  return (
    <StyledProfilePage>
      <StyledBanner>
        <Button text="Contactez-moi" />

        <div className="card-banner-photograph__textContainer">
          <h1 className="card-banner-photograph__name">{data.name}</h1>
          <div className="card-banner-photograph__city">
            {data.city}, {data.country}
          </div>
          <div className="card-banner-photograph__tagline">{data.tagline}</div>
          <div className="tag-list card-banner-photograph__tags"></div>
        </div>

        <div className="card-banner-photograph__portrait">
          <img src={data.portrait} alt="" />
        </div>
      </StyledBanner>

      <section className="filter">
        <span id="trierPar">Trier par </span>
        <Dropdown />
      </section>

      <section className="media-list"></section>

      <section className="info-box">
        <p className="info-box__like"></p>
        <p className="info-box__price"></p>
      </section>
    </StyledProfilePage>
  )
}

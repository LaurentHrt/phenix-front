import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { PhotographerCardProps } from '../../components/PhotographerCard'
import Tag from '../../components/Tag'
import { StyledBanner, StyledProfilePage } from './style'
import Button from '../../components/Button'
import Dropdown from '../../components/Dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { fetchOrUpdatePhotographer } from '../../features/photographer'
import { selectPhotographer } from '../../utils/selectors'

export default function Profile() {
  const params = useParams()
  const photographerId = params.id
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrUpdatePhotographer(photographerId))
  }, [dispatch, photographerId])

  const photographer = useSelector(selectPhotographer(photographerId))
  const profileData = photographer.data ?? {}

  return (
    <StyledProfilePage>
      <StyledBanner>
        <Button text="Contactez-moi" />

        <div className="card-banner-photograph__textContainer">
          <h1 className="card-banner-photograph__name">{profileData.name}</h1>
          <div className="card-banner-photograph__city">
            {profileData.city}, {profileData.country}
          </div>
          <div className="card-banner-photograph__tagline">
            {profileData.tagline}
          </div>
          <div className="tag-list card-banner-photograph__tags"></div>
        </div>

        <div className="card-banner-photograph__portrait">
          <img src={profileData.portrait} alt="" />
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

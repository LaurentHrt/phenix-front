import { useEffect } from 'react'
import PhotographerCard from '../../components/PhotographerCard'
import { fetchOrUpdatePhotographers } from '../../features/photographers'
import { StyledPhotographersContainer } from './style'
import { selectPhotographers } from '../../utils/selectors'
import { useDispatch, useSelector } from 'react-redux'
import { PhotographerModel } from '../../models/Photographer'

export default function Photographers() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchOrUpdatePhotographers)
  }, [dispatch])

  const photographers = useSelector(selectPhotographers)

  if (photographers.status === 'rejected') {
    return <span>Il y a un problème</span>
  }

  return (
    <StyledPhotographersContainer>
      {photographers.data?.map((photographer: PhotographerModel) => (
        <PhotographerCard
          key={photographer.id}
          id={photographer.id}
          name={photographer.name}
          city={photographer.city}
          country={photographer.country}
          tags={photographer.tags}
          tagline={photographer.tagline}
          price={photographer.price}
          portrait={`http://${process.env.REACT_APP_API}:${process.env.REACT_APP_PORT}${process.env.REACT_APP_PATH_TO_PORTRAIT}${photographer.portrait}`}
        />
      ))}
    </StyledPhotographersContainer>
  )
}

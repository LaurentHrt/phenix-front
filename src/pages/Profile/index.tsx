import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { PhotographerCardProps } from '../../components/PhotographerCard'

export default function Profile() {
  const params = useParams()
  const id = parseInt(params.id || '')
  const [data, setData] = useState({})

  useEffect(() => {
    ;(async () => {
      const response = await fetch('../photographers.json')
      const data = await response.json()
      const filteredData = data.photographers.filter(
        (photographer: PhotographerCardProps) => photographer.id === id
      )

      setData(filteredData)
    })()
  })

  return <h1>Photographer {JSON.stringify(data)}</h1>
}

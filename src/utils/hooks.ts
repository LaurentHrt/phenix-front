import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

interface IuseFetchProps {
  url: string
}

export const useFetch = ({ url }: IuseFetchProps) => {
  const [data, setData] = useState()
  const [error, setError] = useState(false)

  const fetch = useCallback(async () => {
    setError(false)
    try {
      const fetchedData = await axios.get(url)
      setData(fetchedData.data)
    } catch (error) {
      setError(true)
    }
  }, [url])

  useEffect(() => {
    fetch()
  }, [fetch])

  return { data, error }
}

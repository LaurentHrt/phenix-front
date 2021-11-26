import { configureStore } from '@reduxjs/toolkit'
import photographersReducer from '../features/photographers'
import photographerReducer from '../features/photographer'
import mediasReducer from '../features/medias'

export const store = configureStore({
  reducer: {
    photographers: photographersReducer,
    photographer: photographerReducer,
    medias: mediasReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

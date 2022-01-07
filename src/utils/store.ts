import { configureStore } from '@reduxjs/toolkit'
import photographersReducer from '../features/photographers'
import photographerReducer from '../features/photographer'
import mediasReducer from '../features/medias'
import postMediaReducer from '../features/postMedia'

export const store = configureStore({
  reducer: {
    photographers: photographersReducer,
    photographer: photographerReducer,
    medias: mediasReducer,
    postMedia: postMediaReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { configureStore } from '@reduxjs/toolkit'
import photographersReducer from '../features/photographers'
import photographerReducer from '../features/photographer'

export const store = configureStore({
  reducer: {
    photographers: photographersReducer,
    photographer: photographerReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>

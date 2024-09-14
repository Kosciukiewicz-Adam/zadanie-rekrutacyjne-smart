import { configureStore } from '@reduxjs/toolkit'
import searchTerms from './searchTerms'


export const store = configureStore({
    reducer: {
        searchTerms: searchTerms,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
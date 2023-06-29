import { configureStore } from '@reduxjs/toolkit'

import { spotifyCoreApi } from './services/spotifyCore'

export const store = configureStore({
    reducer: {
        [spotifyCoreApi.reducerPath]: spotifyCoreApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(spotifyCoreApi.middleware),
})
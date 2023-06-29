import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const spotifyCoreApi = createApi({
    redurerPath: 'spotifyCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://spotify23.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            //turn the API key to an environment variable 
            headers.set('X-RapidAPI-Key', 'e309ecbf14mshda0929a1f488b73p16f26fjsn26245845b51e');

            return headers; 
        },
    }),
    endpoints: (builder) => ({
        getSongsByGenre: builder.query({ query:( genre ) => `search/?q=genre:${genre}&type=track`}),
        getArtistDetails: builder.query({ query:( artistName ) => `search/?q=${artistName}&type=artist`}), 
        getSongBySearch: builder.query({ query:( searchTerm ) => `search/?q=${searchTerm}&type=track`})
    }),
});

export const {
    useGetArtistDetailsQuery,
    useGetSongBySearchQuery, 
    useGetSongsByGenreQuery,
} = spotifyCoreApi; 
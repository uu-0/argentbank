import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = ''

export const api = createApi({
    //identification API
    reducerPath: 'api',
    //prop baseQuery qui use fetchBaseQuery, en lui passant la base url du service api
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL  }), 
    //diff endpoints de l'api, avec lesquels on peut la consommer
    endpoints: (builder) => ({
        createUser: builder.mutation({
        query: (userData) => ({
            url: '/users',
            method: 'POST',
            body: userData,
        }),
        }),
        loginUser: builder.mutation({
        query: (credentials) => ({
            url: '/users/login',
            method: 'POST',
            body: credentials,
        }),
        }),
        getUserProfile: builder.query({
        query: (userId) => `/users/${userId}`,
        }),
        updateUserProfile: builder.mutation({
        query: ({ userId, userData }) => ({
            url: `/users/${userId}`,
            method: 'PUT',
            body: userData,
        }),
        }),
    }),
})

//export des hooks générés automatiquement
export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} = api

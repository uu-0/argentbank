import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BASE_URL = 'http://localhost:3001/'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (userData) => ({
                url: '/user/signup',  
                method: 'POST',
                body: userData,
            }),
        }),
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: '/user/login',  
                method: 'POST',
                body: credentials,
            }),
        }),
        getUserProfile: builder.query({
            query: () => '/user/profile',  
        }),
        updateUserProfile: builder.mutation({
            query: (userData) => ({
                url: '/user/profile', 
                method: 'PUT',
                body: userData,
            }),
        }),
    }),
})

export const {
  useCreateUserMutation,
  useLoginUserMutation,
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
} = api

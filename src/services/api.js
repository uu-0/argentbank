import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Définir l'API avec createApi
export const api = createApi({
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/user', 
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
          headers.set('Authorization', `Bearer ${token}`)
          console.log(token)
        }
        return headers
      },
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => ({
        url: '/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUserProfile: builder.query({
      query: () => ({
        url: '/profile',
        method: 'POST',
      }),
    }),
    updateUserProfile: builder.mutation({
      query: (profileData) => ({
        url: '/profile',
        method: 'PUT',
        body: profileData,
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useGetUserProfileQuery, useUpdateUserProfileMutation } = api

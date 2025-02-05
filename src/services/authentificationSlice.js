import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
	user: null,
}

const authentificationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setToken: (state, action) => {
        state.token = action.payload
      },
      clearToken: (state) => {
        state.token = null
      },
    },
  })
  

export const { setToken, clearToken } = authentificationSlice.actions
export default authentificationSlice.reducer

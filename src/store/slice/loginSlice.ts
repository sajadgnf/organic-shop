import { createSlice } from "@reduxjs/toolkit"

interface PropsType {
  phoneNumber: string
}

const initialState: PropsType = {
  phoneNumber: "",
}

const loginSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    login: (state, action) => {
      state.phoneNumber = action.payload
    },
    logout: (state) => {
      state.phoneNumber = ""
    },
  },
})

export const { login, logout } = loginSlice.actions

export default loginSlice.reducer

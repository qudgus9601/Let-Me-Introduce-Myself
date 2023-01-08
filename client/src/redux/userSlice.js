import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    _id: "",
    email: "",
    username: "",
    role: "",
    isLogin: false,
  },
  reducers: {
    login: (state, action) => {
      state._id = action.payload._id;
      state.email = action.payload.email;
      state.role = action.payload.role;
      state.username = action.payload.username;
      state.isLogin = action.payload.isLogin;
      return state;
    },
    logout: (state) => {
      state._id = "";
      state.email = "";
      state.username = "";
      state.role = "";
      state.isLogin = false;
      return state;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

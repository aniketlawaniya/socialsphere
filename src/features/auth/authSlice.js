import { createSlice } from "@reduxjs/toolkit";
import { loginHelper, signupHelper } from "./helpers";

const initialState = {
  token: JSON.parse(localStorage.getItem("Sphere"))?.token || "",
  userData: JSON.parse(localStorage.getItem("Sphere"))?.userData || {},
  isLoading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: state => {
      localStorage.removeItem("Sphere");
      state.token = "";
      state.userData = {};
    },
  },
  extraReducers: {
    [loginHelper.pending]: state => {
      state.isLoading = true;
    },
    [loginHelper.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.encodedToken;
      state.userData = payload.foundUser;
      state.error = "";
    },
    [loginHelper.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [signupHelper.pending]: state => {
      state.isLoading = true;
    },
    [signupHelper.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.encodedToken;
      state.userData = payload.createdUser;
      state.error = "";
    },
    [signupHelper.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

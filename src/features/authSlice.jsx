import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  error: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.data.data;
    },
    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.user = payload.data;
      state.token = payload.token;
    },
    logoutSuccess: (state) => {
      state.user = "";
      state.loading = false;
      state.token = "";
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
  fetchFail,
} = authSlice.actions;

export default authSlice.reducer;

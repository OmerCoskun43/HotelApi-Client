import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  hotels: [],
  hotel: {},
  rooms: [],
};

const authSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    hotelSuccess: (state, { payload }) => {
      state.loading = false;
      state.hotels = payload.data.data;
    },
    hotelOneSuccess: (state, { payload }) => {
      state.loading = false;
      state.hotel = payload.data.data;
    },
    roomsSuccess: (state, { payload }) => {
      state.loading = false;
      state.rooms = payload.data.data;
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  hotelSuccess,
  fetchFail,
  hotelOneSuccess,
  roomsSuccess,
} = authSlice.actions;

export default authSlice.reducer;

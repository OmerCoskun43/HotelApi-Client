/* eslint-disable no-unused-vars */

import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import {
  hotelSuccess,
  hotelOneSuccess,
  roomsSuccess,
} from "../features/hotelSlice";

const useHotelCalls = () => {
  const dispatch = useDispatch();

  const { axiosWithToken, axiosPublic } = useAxios();

  const HotelList = async (city) => {
    try {
      const data = await axiosPublic.get(`/hotels?search[city]=${city}`);
      toastSuccessNotify("Hotels fetched  Successfully");
      dispatch(hotelSuccess(data));
    } catch (error) {
      toastErrorNotify("Hotels fetched  Failed 😪😪😪");
    }
  };
  const HotelOneGet = async (id) => {
    try {
      const data = await axiosWithToken.get(`/hotels/${id}`);
      toastSuccessNotify("Hotel fetched  Successfully");
      dispatch(hotelOneSuccess(data));
    } catch (error) {
      toastErrorNotify("Hotel fetched  Failed 😪😪😪");
    }
  };
  //   const getMyBlogs = async (id) => {
  //     try {
  //       const data = await axiosWithToken.get(`/blogs/myblogs/${id}`);
  //       toastSuccessNotify("My Blogs fetched  successfully");
  //       dispatch(myBlogsSuccess(data));
  //     } catch (error) {
  //       toastErrorNotify("Blogs fetched  Failed 😪😪😪");
  //     }
  //   };
  const createHotel = async (hotelInfo) => {
    try {
      await axiosWithToken.post("/hotels", hotelInfo);
      HotelList({});

      toastSuccessNotify("Hotel created  successfully");
    } catch (error) {
      toastErrorNotify("Hotel created  Failed 😪😪😪");
    }
  };
  const deleteHotel = async (id) => {
    try {
      await axiosWithToken.delete(`/hotels/${id}`);
      HotelList({});

      toastSuccessNotify("Hotel deleted  Successfully");
    } catch (error) {
      toastErrorNotify("Hotel fetched  Failed 😪😪😪");
    }
  };
  const getRooms = async (id) => {
    try {
      const data = await axiosPublic.get(`/rooms/hotel/${id}`);
      dispatch(roomsSuccess(data));

      toastSuccessNotify("Hotel Rooms fetched  Successfully");
    } catch (error) {
      toastErrorNotify("Hotel Rooms fetched  Failed 😪😪😪");
    }
  };

  return { HotelList, createHotel, deleteHotel, HotelOneGet, getRooms };
};

export default useHotelCalls;

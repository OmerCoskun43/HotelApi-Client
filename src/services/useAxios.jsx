import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const url = import.meta.env.VITE_BASE_URL;
  const { token } = useSelector((state) => state.auth);
  // console.log("token :>> ", token);

  const axiosPublic = axios.create({
    baseURL: url,
  });

  const axiosWithToken = axios.create({
    baseURL: url,
    headers: { Authorization: `Token ${token}` },
  });

  return { axiosWithToken, axiosPublic };
};

export default useAxios;

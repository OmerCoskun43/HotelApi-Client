/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
"react";

import { useSelector } from "react-redux";
import useHotelCalls from "../services/useHotelCalls";
import { useEffect } from "react";
import HotelCard from "../components/HotelCard";

const Home = ({ search }) => {
  // const { user, token } = useSelector((state) => state.auth);
  // console.log("user :>> ", user);
  // console.log("token :>> ", token);
  // console.log("search :>> ", search);

  const { HotelList } = useHotelCalls();

  const { hotels } = useSelector((state) => state.hotel);

  useEffect(() => {
    HotelList(search);
  }, [search]);

  // console.log("hotels :>> ", hotels);
  // console.log("hotels.length :>> ", hotels.length);

  return (
    <>
      {hotels.length === 0 && (
        <h1 className="text-red-500 text-center font-bold text-3xl md:text-5xl mt-[50%] md:mt-[12%] m] animate-bounce">
          Hotel Not Found. Search Another City Hotel
        </h1>
      )}
      {hotels.length > 0 && (
        <div className="mx-2 md:mx-0 ">
          <h1 className="text-lg md:text-3xl font-bold text-center text-red-600 ">
            Popular Hotels
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
            {hotels?.map((hotel) => (
              <HotelCard key={hotel._id} hotel={hotel} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;

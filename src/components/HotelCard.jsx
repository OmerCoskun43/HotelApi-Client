/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Carousel } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import useHotelCalls from "../services/useHotelCalls";
import { useNavigate } from "react-router-dom";
const HotelCard = ({ hotel }) => {
  const { user } = useSelector((state) => state.auth);
  const { deleteHotel } = useHotelCalls();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    deleteHotel(id);
  };
  return (
    <div
      className="
      flex  flex-col gap-2  p-5 
      bg-slate-200
      rounded-2xl
      shadow-2xl 
      w-[350px] md:w-[500px] xl:w-[600px]
      bg-[#42A5F5]
      mx-auto
      
    "
    >
      <div className="flex justify-between">
        <h1 className="text-md text-[#7FF500] md:text-3xl font-bold px-1 animate-pulse line-clamp-1">
          {hotel.name}
        </h1>
        <p className="text-white w-[100px] font-bold text-center rounded-xl px-3 py-2 bg-red-500  top-1 right-16">
          {hotel.city}
        </p>
      </div>

      <div>
        <div className="flex gap-2 justify-center relative">
          <Carousel
            transition={{ duration: 1 }}
            className="rounded-xl w-[350px] md:w-[500px] xl:w-[600px] "
          >
            {hotel.image.map((image) => (
              <img
                className="rounded-xl w-[355px] h-[200px] md:w-[600px] md:h-[300px] "
                key={image}
                src={image}
                alt="hotel"
              />
            ))}
          </Carousel>
          {user && user?.isAdmin && (
            <button
              onClick={() => handleDelete(hotel._id)}
              className="btnStyle bg-black absolute bottom-0 left-0"
            >
              Delete
            </button>
          )}
          <button
            onClick={() => navigate(`/hotels/${hotel._id}`)}
            className="btnStyle bg-green-700 absolute bottom-0 right-0"
          >
            View More
          </button>
        </div>
      </div>

      <p
        className="text-justify 
        
      
      indent-10 bg-[#4b32a5] rounded-2xl text-white text-sm md:text-lg px-3 line-clamp-3 h-[60x] md:h-[85px] "
      >
        {hotel.description}
      </p>
    </div>
  );
};

export default HotelCard;

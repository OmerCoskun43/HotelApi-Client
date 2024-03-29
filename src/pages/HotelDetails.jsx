/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useHotelCalls from "../services/useHotelCalls";
import { useSelector } from "react-redux";
import { Carousel } from "@material-tailwind/react";
import RoomCard from "../components/RoomCard";

const HotelDetails = () => {
  const { id } = useParams();
  const { HotelOneGet, deleteHotel, getRooms } = useHotelCalls();
  const { hotel, rooms } = useSelector((state) => state.hotel);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    HotelOneGet(id);
    getRooms(id);
  }, []);

  console.log("rooms :>> ", rooms);

  const handleDelete = (id) => {
    deleteHotel(id);
  };

  return (
    <div>
      <div
        className="
        relative
       flex  flex-col gap-2  p-5 mt-[30px] md:mb-[35px]
      bg-slate-200
      rounded-2xl
      shadow-2xl 
      w-[350px] md:w-[700px] xl:w-[1000px]
      bg-[#42A5F5]
      mx-auto
      
    "
      >
        <div className="flex justify-between">
          <h1 className="text-md text-[#7FF500] md:text-3xl font-bold px-1 animate-pulse ">
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
              className="rounded-xl w-[350px] md:w-[700px] xl:w-[1000px] "
            >
              {hotel?.image?.map((image) => (
                <img
                  className="rounded-xl w-[355px] h-[200px] md:w-[700px] xl:w-[1000px] md:h-[300px] "
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
            <button className="btnStyle bg-green-700 absolute bottom-0 right-0">
              View More
            </button>
          </div>
        </div>

        <p
          className="text-justify 
        
      
      indent-10 bg-[#4b32a5] rounded-2xl text-white text-sm md:text-lg px-3 md:p-10  "
        >
          {hotel.description}
        </p>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="btnStyle bg-orange-700 fixed top-[5rem] md:top-[9.5rem] md:left-10 z-50 "
      >
        {" "}
        Go Back
      </button>

      {rooms.length == 0 && (
        <h1 className="text-red-500 text-center font-bold text-3xl md:text-5xl mt-[50%] md:mt-[12%] m] animate-bounce">
          Rooms Not Found. Search Another City Hotel
        </h1>
      )}

      {rooms.length > 0 && (
        <div>
          <h1 className="text-red-500 text-center font-bold text-3xl md:text-5xl mt-[10%] md:mt-[5%] m] animate-bounce">
            Hotel Rooms
          </h1>
          <div className="flex flex-wrap gap-2 justify-center">
            {rooms?.map((room) => (
              <div key={room._id}>
                <RoomCard key={room._id} room={room} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HotelDetails;

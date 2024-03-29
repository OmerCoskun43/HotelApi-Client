/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Carousel, IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  //   console.log("room :>> ", room);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row border md:w-[1000px] border-black p-6 md:p-10 rounded-xl bg-blue-400 ">
      <div className="carousel w-full ">
        <Carousel
          className="rounded-xl w-[300px] md:w-[500px] xl:w-[600px]"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="!absolute top-2/4 left-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="!absolute top-2/4 !right-4 -translate-y-2/4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
        >
          {room?.image?.map((img, index) => {
            return (
              <img
                src={img}
                alt={"photo" + index}
                key={index}
                className=" h-[150px] md:h-[300px]   w-[300px] md:w-[500px] xl:w-[580px] rounded-xl"
              />
            );
          })}
        </Carousel>
      </div>
      <div className="bg-white w-full  rounded-xl p-2 md:p-5 flex flex-col justify-between ">
        <div>
          <div className="flex justify-between ">
            {" "}
            <span className="text-lg md:text-xl text-purple-600 ">Name</span>
            <span>{room?.hotelId.name}</span>
          </div>
          <div className="flex justify-between">
            {" "}
            <span className="text-lg md:text-xl text-purple-600">City</span>
            <span>{room?.hotelId.city}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg md:text-xl text-purple-600">
              Room Number
            </span>
            <span>{room?.roomNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg md:text-xl text-purple-600">Bed Type</span>
            <span className="uppercase">{room?.bedType}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-lg md:text-xl text-purple-600">Price</span>
            <span>₺{room?.price}</span>
          </div>{" "}
        </div>

        <div className="flex justify-between mt-2">
          <span></span>
          <button
            onClick={() => navigate(`/reservation/${room._id}`)}
            className="btnStyle bg-red-500"
          >
            Go To Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;

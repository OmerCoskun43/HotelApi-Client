/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import useHotelCalls from "../services/useHotelCalls";
import { useSelector } from "react-redux";
import HotelCard from "../components/HotelCard";

const Admin = ({ search }) => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    description: "",
    image: [],
  });
  const { HotelList } = useHotelCalls();

  const { hotels } = useSelector((state) => state.hotel);

  const { createHotel } = useHotelCalls();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createHotel(formData);
    setFormData({
      name: "",
      city: "",
      description: "",
      image: [],
    });
  };

  useEffect(() => {
    HotelList(search);
  }, [search]);
  return (
    <div>
      <h1 className="md:text-3xl font-bold text-center text-red-500">
        Admin Panel
      </h1>

      <div>
        <div className="w-full mx-auto mb-3  ">
          <div className="text-center bg-[#42A5F5] w-[350px] md:w-[90%] h-[480px] mx-auto rounded-xl">
            <h1 className="text-md md:text-2xl text-white font-bold pt-4">
              ADD HOTEL
            </h1>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2  w-[90%]  mx-auto my-6 "
            >
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <input
                type="text"
                placeholder="name"
                className="input-style"
                name="name"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <label htmlFor="name" className="input-label">
                City
              </label>
              <input
                type="text"
                placeholder="city"
                className="input-style"
                name="city"
                onChange={handleChange}
                value={formData.city}
                required
              />

              <label htmlFor="name" className="input-label">
                Description
              </label>

              <input
                type="text"
                placeholder="description"
                className="input-style"
                name="description"
                onChange={handleChange}
                value={formData.description}
                required
              />

              <label htmlFor="image" className="input-label">
                Images
              </label>

              <input
                type="text"
                placeholder="image"
                className="input-style"
                name="image"
                onChange={handleChange}
                value={formData.image}
                required
              />

              <button className="bg-red-500 text-white p-2 rounded-xl mb-2">
                ADD
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mx-auto ">
          {hotels?.map((hotel) => (
            <HotelCard key={hotel._id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;

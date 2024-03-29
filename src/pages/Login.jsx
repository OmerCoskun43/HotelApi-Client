/* eslint-disable no-unused-vars */
import { useState } from "react";
import useAuthCalls from "../services/useAuthCalls";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuthCalls();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);

    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="w-2/3 sm:w-2/5 mx-auto  mt-10  mb-[100px] bg-white rounded-lg p-3 shadow-2xl ">
      <h1 className="text-lg sm:text-2xl font-bold text-center text-indigo-600 p-3 cursor-pointer">
        <span className="hover:text-red-600">LOGIN</span>{" "}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-3 h-[300px] justify-center "
      >
        <input
          type="email"
          placeholder="Email"
          className="input-style"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="input-style"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <button
          className="w-full p-2 mt-2  text-center bg-indigo-600 text-white rounded-md cursor-pointer hover:bg-indigo-800"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import useAuthCalls from "../services/useAuthCalls";

const Navbar = ({ setSearch }) => {
  const { user } = useSelector((state) => state.auth);

  let username = user?.username;

  username = username?.charAt(0).toUpperCase() + username?.slice(1);

  const { logout } = useAuthCalls();
  return (
    <div className="bg-blue-400 py-3 flex justify-between items-center px-5 md:px-8 font-bold">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return {
            color: isActive ? "chartreuse" : "white",
          };
        }}
      >
        <img
          className="w-[80px] md:w-[120px] hidden md:block     "
          src="./logo3.png"
          alt=""
        />
      </NavLink>

      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Hotel with City ..."
        className="border-2 border-slate-200 me-3 md:me-0  p-2 w-1/2 rounded-lg md:w-2/6"
      />

      <div className="flex  gap-3 justify-center items-center border p-3 border-[#7FF500] rounded-lg bg-blue-700 shadow-2xl ">
        {user && (
          <p className="text-[#7FF500] hidden md:inline">
            {" "}
            <span className="text-yellow-400"> {username}</span> |
          </p>
        )}

        {user && (
          <NavLink
            to="/profile"
            style={({ isActive }) => {
              return {
                color: isActive ? "chartreuse" : "white",
              };
            }}
          >
            Profile <span className="text-[#7FF500] hidden md:inline">| </span>
          </NavLink>
        )}
        {!user && (
          <NavLink
            to="/login"
            style={({ isActive }) => {
              return {
                color: isActive ? "chartreuse" : "white",
              };
            }}
          >
            Login <span className="text-[#7FF500] hidden md:inline">| </span>
          </NavLink>
        )}
        {!user && (
          <NavLink
            to="/register"
            style={({ isActive }) => {
              return {
                color: isActive ? "chartreuse" : "white",
              };
            }}
          >
            Register <span className="text-[#7FF500] hidden md:inline">| </span>
          </NavLink>
        )}

        <NavLink
          to="/about"
          style={({ isActive }) => {
            return {
              color: isActive ? "chartreuse" : "white",
            };
          }}
          className="cursor-pointer hidden md:block "
        >
          About <span className="text-[#7FF500] hidden md:inline">| </span>
        </NavLink>

        {user && user?.isAdmin && (
          <NavLink
            to="/admin"
            style={({ isActive }) => {
              return {
                color: isActive ? "chartreuse" : "white",
              };
            }}
          >
            Admin <span className="text-[#7FF500] hidden md:inline">| </span>
          </NavLink>
        )}
        {user && (
          <span onClick={() => logout()} className="text-white cursor-pointer ">
            Logout <span className="text-[#7FF500] hidden md:inline">| </span>
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;

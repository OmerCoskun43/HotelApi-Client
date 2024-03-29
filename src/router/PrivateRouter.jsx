/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { user } = useSelector((state) => state.auth);
  const usr = true;
  return usr ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;

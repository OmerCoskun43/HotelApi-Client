import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("user :>> ", user);
  return (
    <div
      className="
    flex
    flex-col
    gap-2
    p-5
    mt-[30px]
    mb-[35px]
    bg-slate-200
    rounded-2xl
    shadow-2xl
    w-[350px]
    md:w-[700px]
    xl:w-[1000px]
    bg-white
    mx-auto
    "
    >
      <h1 className="text-lg sm:text-2xl font-bold text-center text-indigo-600">
        Profile
      </h1>
      <h3>
        Name :{" "}
        {user?.username?.charAt(0).toUpperCase() + user.username?.slice(1)}
      </h3>
      <h3>Email : {user?.email}</h3>
      <h3>Password : {user?.password.slice(0, 20) + "..."}</h3>
      <h3>Admin : {user?.isAdmin ? "Yes" : "No"}</h3>
      <h3>Account Date: {user?.createdAt.split("T")[0]}</h3>
      <h3>Id : {user?._id}</h3>
    </div>
  );
};

export default Profile;

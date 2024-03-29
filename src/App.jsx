import { useState } from "react";
import AppRouter from "./router/AppRouter";
import { ToastContainer } from "react-toastify";

function App() {
  const [search, setSearch] = useState({});
  return (
    <>
      <AppRouter search={search} setSearch={setSearch} />
      <ToastContainer />
    </>
  );
}

export default App;

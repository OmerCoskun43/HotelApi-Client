import { useParams } from "react-router-dom";

const Reservaiton = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Reservaiton</h1>
      <h2>Room ID: {id}</h2>
    </div>
  );
};

export default Reservaiton;

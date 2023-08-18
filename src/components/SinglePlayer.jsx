import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../API";

export default function SinglePlayer() {
  const params = useParams();
  const [player, setPlayer] = useState({});

  async function getSinglePuppy() {
    // fetch data from the API
    try {
      setPlayer(await fetchSinglePlayer(params.playerId));
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getSinglePuppy();
  }, []);

  return (
    <div key={player.id}>
      <h4>{player.name}</h4>
      <img src={player.imageUrl} alt={player.name} />
      <h1>Extra Details: </h1>
      <h2>{player.breed}</h2>
      <h2>{player.status}</h2>
    </div>
  );
}

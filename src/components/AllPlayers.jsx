import { fetchAllPlayers } from "../API";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  async function fetchAllPuppies() {
    // fetch data from the API
    try {
      setPlayers(await fetchAllPlayers());
    } catch (err) {
      console.err("uh oh trouble fetching all players", err);
    }
  }
  useEffect(() => {
    fetchAllPuppies();
  }, []);

  return (
    // will return HTML bc jsx
    <div>
      {players.map((player) => {
        return (
          <div key={player.id}>
            <h4>{player.name}</h4>
            <img src={player.imageUrl} alt={player.name} />
            <div className="singleplayer">
              <button
                onClick={() => {
                  navigate(`/player/${player.id}`);
                }}
              >
                See Details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

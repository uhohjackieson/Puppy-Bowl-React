import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <>
      {/* add navbar for allplayers and single player */}
      <div id="container">
        <div id="navbar">
          <h1>NavBar</h1>
          <Link to="/allPlayers">View All Players</Link>
        </div>

        <div>
          <Routes>
            <Route path="/allPlayers" element={<AllPlayers />} />
            <Route path="/player/:playerId" element={<SinglePlayer />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

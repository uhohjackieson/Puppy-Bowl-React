import { useState } from 'react'
import './App.css'
import { Link, Routes, Route, useParams } from "react-router-dom"
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'


function App() {
  // const [count, setCount] = useState(0)
  let { playerId } = useParams();


  return (
    <>
      {/* add navbar for allplayers and single player */}
      <div id="container">
      <div id="navbar">
        <h1>NavBar</h1>
        <Link to="/AllPlayers">View All Players</Link>
        <Link to="/SinglePlayer">Single Player</Link>
      </div>
      
      <div>
        <Routes>
          <Route path="/AllPlayers" element={<AllPlayers />}/>
          <Route path="/SinglePlayer/{playerId}" element={<SinglePlayer />}/>
        </Routes>
      </div>
      </div>




    </>
  )
}

export default App

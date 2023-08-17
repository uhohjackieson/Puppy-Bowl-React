import { useState } from 'react'
import './App.css'
import { Link, Routes, Route } from "react-router-dom"
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* add navbar for allplayers and single player */}
      <div id="container">
      <div id="navbar">
        <h1>NavBar</h1>
        <Link to="/allplayers">View All Players</Link>
        <Link to="/singleplayer">Single Player</Link>
      </div>
      
      <div>
        <Routes>
          <Route path="/AllPlayers" element={<AllPlayers />}/>
          <Route path="/SinglePlayers" element={<SinglePlayer />}/>
        </Routes>
      </div>
      </div>




    </>
  )
}

export default App

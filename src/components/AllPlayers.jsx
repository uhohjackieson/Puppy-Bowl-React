// import { fetchAllPlayers } from "../API"
import { useState, useEffect} from "react"
// import React from "react"


const PLAYERS_API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"

export default function AllPlayers() {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        async function fetchAllPlayers () {
    
            // fetch data from the API
            try{
            const response = await fetch(PLAYERS_API_URL);
        
            // transform into json for use
            const players = await response.json();
            
            setPlayers(players.data.players)
        
            } catch(err) {
                console.err("uh oh trouble fetching all players", err)
            }
        }
        fetchAllPlayers();
        
        
    }, [])
 
 

    return (
        // will return HTML bc jsx
        <div>
        {
            players.map((player)=>{
                return (
                    <div key={player.id}>
                        <h4>{player.name}</h4>
                        <img src={player.imageUrl} alt={player.name}/>

                    </div>
                )
            })
        }
    </div>


    )
}
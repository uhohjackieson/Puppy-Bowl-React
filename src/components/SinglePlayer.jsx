import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchSinglePlayer } from "../API"
// import {AllPlayers} from "./AllPlayers"


export default function SinglePlayer({selectedPuppyId, setSelectedPuppyId}) {
    const navigate = useNavigate()
    const [player, setPlayer] = useState({})



        async function getSinglePuppy () {
            
            // fetch data from the API
            try {
                setPlayer(await fetchSinglePlayer(selectedPuppyId))
            }catch(err) {
                console.log(err)
            }

        }
    useEffect(() => {
        getSinglePuppy();
        
    }, [])

    return(
        console.log(player)
        // <div className="singleplayer">
        //     <button onClick={()=> navigate(player.id)}>See Details</button>
        // </div>

    )
}
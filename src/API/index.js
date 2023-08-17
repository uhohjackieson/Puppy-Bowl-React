
const PLAYERS_API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"


export async function fetchAllPlayers () {
    
    // fetch data from the API
    try{
    const response = await fetch(PLAYERS_API_URL);
    // transform into json for use
    const players = await response.json();
    return players.data.players;

    } catch(err) {
        console.err("uh oh trouble fetching all players", err)
    }
}

export async function fetchSinglePlayer (playerId) {
     
    // fetch data from the API
    try{
    const response = await fetch(`${PLAYERS_API_URL}/${playerId}`);
    
    // transform into json for use
    const result = await response.json();
    const singlePuppy = result.data.player;
    return singlePuppy;
 

    } catch(err) {
        console.err("uh oh trouble fetching single player", err);
    }
}




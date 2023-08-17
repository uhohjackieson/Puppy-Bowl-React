// function fetchAllPlayers
// add try/catches

const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF"

const PLAYERS_API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF/players"

// fetch data from the API

const response = fetch("https://fsa-puppy-bowl.herokuapp.com/api/2306-GHP-ET-WEB-FT-SF");

// transform into json for use
const result = response.json();

// 


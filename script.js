const playerContainer = document.getElementById('all-players-container');
const newPlayerFormContainer = document.getElementById('new-player-form');

// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = "2304-FTB-ET-WEB-FT";
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

/**
 * It fetches all players from the API and returns them
 * @returns An array of objects.
 */
const fetchAllPlayers = async () => {
    try {
        const apiData = await fetch(`${APIURL}/players`);
        const fetchedData = await apiData.json();
        // console.log(fetchedData);
        //drilling down to the actual array of players
        actualData = fetchedData.data.players;
    console.log(actualData)
        return actualData
    } catch (err) {
        console.error("Uh oh, trouble fetching players!", err);
    }
};



//Need to take the data from the api and drill down to just the player IDs
const fetchSinglePlayer = async (playerId) => {
    try {
        const singlePlayerData = await fetch(`${APIURL}/players`);
        const puppies = await singlePlayerData.json();
        let arrPuppies = puppies.data.players;
        let singlePuppy = arrPuppies[playerId]
        // console.log(singlePuppy[1])
        return singlePuppy
    } catch (err) {
        console.error(`Oh no, trouble fetching player #${playerId}!`, err);
    }
};



const addNewPlayer = async (playerObj) => {
    try {

    } catch (err) {
        console.error('Oops, something went wrong with adding that player!', err);
    }
};

const removePlayer = async (playerId) => {
    try {

    } catch (err) {
        console.error(
            `Whoops, trouble removing player #${playerId} from the roster!`,
            err
        );
    }
};

/**
 * It takes an array of player objects, loops through them, and creates a string of HTML for each
 * player, then adds that string to a larger string of HTML that represents all the players. 
 * 
 * Then it takes that larger string of HTML and adds it to the DOM. 
 * 
 * It also adds event listeners to the buttons in each player card. 
 * 
 * The event listeners are for the "See details" and "Remove from roster" buttons. 
 * 
 * The "See details" button calls the `fetchSinglePlayer` function, which makes a fetch request to the
 * API to get the details for a single player. 
 * 
 * The "Remove from roster" button calls the `removePlayer` function, which makes a fetch request to
 * the API to remove a player from the roster. 
 * 
 * The `fetchSinglePlayer` and `removePlayer` functions are defined in the
 * @param playerList - an array of player objects
 * @returns the playerContainerHTML variable.
 */

const renderAllPlayers = async () => {
    const singlePlayerData = await fetch(`${APIURL}/players`);
        const puppies = await singlePlayerData.json();
        let arrPuppies = puppies.data.players;
       // console.log(arrPuppies[])
    for (let i = 0; i < arrPuppies.length; i++) {
        let currentPlayer = arrPuppies[i]
       // console.log(currentPlayer)
        let name = currentPlayer.name
       // console.log(name)
        let breed = currentPlayer.breed
        let imageUrl = currentPlayer.imageUrl
        let cohortId = currentPlayer.cohortId
        let status = currentPlayer.status
        const newElement = document.createElement("div");
        newElement.innerText = `${name} is a ${breed} `;
        let img = document.createElement('img')
        img.src = `${imageUrl}`
        newElement.classList.add("puppy");
        playerContainer.appendChild(newElement);
        playerContainer.appendChild(img);
        let newButton = document.createElement("button")
        newButton.innerText = `Click here for ${name}'s Details`
        
        newButton.addEventListener("click", () => {
            localStorage.setItem("name", name);
            localStorage.setItem("cohort", cohortId);
            localStorage.setItem("status", status)
            localStorage.setItem("img", imageUrl)
            window.location.href = "puppy-details.html"
        })

        playerContainer.appendChild(newButton)

    }
}


/**
 * It renders a form to the DOM, and when the form is submitted, it adds a new player to the database,
 * fetches all players from the database, and renders them to the DOM.
 */
const renderNewPlayerForm = () => {
    try {

    } catch (err) {
        console.error('Uh oh, trouble rendering the new player form!', err);
    }
}


const init = async () => {
    const players = await fetchAllPlayers();
    renderAllPlayers(players);
    renderNewPlayerForm();
}

init();
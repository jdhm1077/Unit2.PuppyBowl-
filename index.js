//console.log("hello");

const apiBaseURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/.`;

const getAllPlayers = () => {
    const response = fetch (`$(apiBaseURL)players` );
    console.log(response);

}

getAllPlayers();
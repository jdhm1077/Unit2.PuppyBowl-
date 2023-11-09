//console.log("hello");

const apiBaseURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/`;

const getPlayersPic = async () => {
    const response = await fetch (`${apiBaseURL}players `);
    const playersPic =await response.json();
    console.log(playersPic);
    //grab the main with querySelector
    const main = document.querySelector(`main`);
    //console.log(main)
    //create an image
   const img = document.createElement(`img`);
    console.log(img)
    // grab source from message
   img.src = playersPic.data.players[0].imageUrl;
   img.alt =`picture of player`;
    //append it
    main.appendChild(img);

}


getPlayersPic();
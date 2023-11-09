//console.log("hello");

const apiBaseURL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/`;

const cardsContainer = document.querySelector(`#cards-container`);

const getPlayersPic = async () => {
    const response = await fetch (`${apiBaseURL}players `);
    const playersPic =await response.json();
    console.log(playersPic);
    //grab the main with querySelector
    const div = document.querySelector(`div`);
    //console.log(div)
    //create an image
   const img = document.createElement(`img`);
    console.log(img)
    /*const players = document.createElement(`h3`);
     const name = document.createElement (`h3`); 
     const like = document.createElement (`Button`);*/
     const playersArray = playersPic.data.players
    // grab source from message
   img.src = playersPic.data.players[0].imageUrl;
   for (let i=0; i< playersArray.length; i++){
        //display players pic and infor
        const player = playersArray[i];
        console.log(player);
        const imagePlayer = player.imageUrl;
        console.log(imagePlayer);
        const namePlayer = player.name;
        console.log(namePlayer);
        const breedPlayer = player.breed;
        console.log(breedPlayer);

   }
   img.alt =`picture of player`;
   //append it
   div.appendChild(img);

   
  
    
  
   /* main.classList = `card`;
    img.classList = `card-img`;
    like.classList =`empty`;

    main.appendChild(img);
    main.appendChild(name);
    //main.appendChild(breed);
    main.appendChild(like);
    cardsContainer.appendChild(main);*/
    
}






getPlayersPic();
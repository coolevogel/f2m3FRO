const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 250 + 1); // 1...250

let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        console.log(realData);
        pokemonImage.src = realData.sprites.front_default;
    });

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;

catchButton.onclick = function(){
    if(pokemonGamePlayed === false){
        let catchNumber = Math.floor(Math.random() * 2); // 0 - 1
        if(catchNumber === 0){
            pokemonText.innerText = "the pokemon escaped!"
        }
        else{
            pokemonText.innerText = "Pokémon Caught!"
        }
        pokemonGamePlayed = true;
    }
}

const tvshow = document.getElementById("js--tvshow-titel");
const tvtext = document.getElementById("js--tvshow-text");

let show = fetch("https://api.tvmaze.com/shows/15299")
    .then(function(responseData){
       return responseData.json();
    }) 
    .then(function(echteData){
        tvshow.innerText = echteData.name;
        tvtext.innerHTML = echteData.summary;
    })

const nameText = document.getElementById("js--name");
const inputField = document.getElementById("js--input")

inputField.onkeyup = function(event){
    if(event.keyCode === 13){
        let name = inputField.value;
        /* api call naar age predictor */
        let age = fetch("https://api.agify.io?name=" + name)
            .then(function(response){
                return response.json();
            })
            .then(function(echteData){
                inputField.style.display = "none";
                nameText.innerText = echteData.age;
            });
    }
}
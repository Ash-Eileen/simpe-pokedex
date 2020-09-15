function getRandomNumberForPokeAPI(){
    // The "808" is just a safe maximum for how many Pokemon are currently in the API.
    // When they add more Pokemon, that number should go up.
    // Some newer Pokemon (numbers 808 and above) might be missing some data - 
    // if that's the case, just change this number back to 808 instead of 894.
    let suitableNumber = Math.floor(Math.random() * 808);
    return suitableNumber;
    
    // You would then place this number in the PokeAPI url as per the API docs,
    // using trusty ol' string interpolation.
    // Like so:
    // https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}
}

// Write your own JS after this line --------------------------------------
let getPokemon = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}`)
    .then(response => {
              let pokemonName = document.getElementById("pokemonName");
              let pokemonType1 = document.getElementById("pokemonType1");
              let pokemonType2 = document.getElementById("pokemonType2");
              console.log(response.data.sprites)
              document.getElementById("pokemonImage").src = `${response.data.sprites.front_default}`
              pokemonName.textContent = `Name: ${response.data.name}`;
              pokemonType1.textContent = `Type 1: ${response.data.types[0].type.name}`;
              if (response.data.types[1]) {
                pokemonType2.style.display = "block";
                pokemonType2.textContent = `Type 2: ${response.data.types[1].type.name}`
                } else {
                pokemonType2.style.display = "none";
                };
    })
    .catch(err => console.log(err))
}

window.onload=function(){
  document.getElementById("button").addEventListener("click", getPokemon)
}
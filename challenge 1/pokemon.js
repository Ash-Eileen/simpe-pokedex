function getRandomNumberForPokeAPI(){
    let suitableNumber = Math.floor(Math.random() * 808);
    return suitableNumber;
}

let getPokemon = () => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}`)
    .then(response => {
              const pokemonName = document.getElementById("pokemonName");
              const pokemonType1 = document.getElementById("pokemonType1");
              const pokemonType2 = document.getElementById("pokemonType2");
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
function getRandomNumberForPokeAPI(){

    let suitableNumber = Math.floor(Math.random() * 808);
    return suitableNumber;
  }

let getPokemon = (num) => {
  for (let i = 1; i <= num; i++) {
     axios.get(`https://pokeapi.co/api/v2/pokemon/${getRandomNumberForPokeAPI()}`)
      .then(response => {
        const pokemon = document.querySelector("#pokemon");
        let pokemonName = document.createElement("p");
        let pokemonType1 = document.createElement("p");
        let pokemonType2 = document.createElement("p");
        let pokemonImage = document.createElement("img")
        pokemonImage.src = `${response.data.sprites.front_default}`
        pokemonName.textContent = `Name: ${response.data.name}`;
        pokemonType1.textContent = `Type 1: ${response.data.types[0].type.name}`;
        if (response.data.types[1]) {
          pokemonType2.textContent = `Type 2: ${response.data.types[1].type.name}`
        }
        pokemon.appendChild(pokemonImage)
        pokemon.appendChild(pokemonName)
        pokemon.appendChild(pokemonType1)
        pokemon.appendChild(pokemonType2)
    })
    .catch(err => console.log(err))
  }
}

window.onload = function(){
  document.getElementById("button").addEventListener("click", () => {
    getPokemon(6);
    pokemon.innerHTML = '';
  })
}
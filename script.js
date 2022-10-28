let startIndex = 1;
let pokemonsNumber = 12;

function createPokemonCard(pokemon) {
  const type = pokemon.types[0].type.name;
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  
  if (pokemon.types[1] != undefined){
    



    document.querySelector('#pokemonContainer').innerHTML += `
    <div " style="background:linear-gradient(${grass}, ${poison})" class="pokemon ${type} ${pokemon.types[1].type.name}">
      <div class="imgContainer">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}" />
      </div>
      <div class="info">
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type} ${pokemon.types[1].type.name}</span></small>
      </div>
    <div>
  `;
  
  }else {

  document.querySelector('#pokemonContainer').innerHTML += `
    <div class="pokemon ${type}">
      <div class="imgContainer">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${name}" />
      </div>
      <div class="info">
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span></small>
      </div>
    <div>
  `;
}}
fetch(`https://pokeapi.co/api/v2/pokemon/4`).then(response => response.json())
  .then(data => {
  console.log(data);})

function fetchPokemons() {
  for (let i = startIndex; i <= pokemonsNumber; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(response => response.json())
      .then(data => {
        createPokemonCard(data);

      });
  }
}

document.querySelector('#next').addEventListener('click', function () {
  startIndex += pokemonsNumber;
  pokemonsNumber += pokemonsNumber;
  fetchPokemons();
});

// Initial fetch
fetchPokemons();




const poison = "#98d7a5";
const grass = "#defde0";

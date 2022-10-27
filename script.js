// Insert your code here
let startIndex = 1;
console.log(startIndex);

// let pokemonNumber = 16;

function pokedex() {
  for (let i = startIndex; i < startIndex + 12; i++) {
    fetch("https://pokeapi.co/api/v2/pokemon-form/" + i)
      .then((response) => response.json())
      .then((data) => {

        function capitalizeFLetter(name) {
          return (name + "").charAt(0).toUpperCase() + name.substr(1);
        }

        document.querySelector("#pokemonContainer").innerHTML += `
        <div class="pokemon ${data.types[0].type.name}">
        <div class="imgContainer">
            <img src=${data.sprites.front_default} alt="${capitalizeFLetter(
          data.name
        )}" />
        </div>
        <div class="info">
            <h3 class="name">${capitalizeFLetter(data.name)}</h3>
            <span class="type">Type: <span>${data.types[0].type.name}</span></span>
            <span class="type2">Type: <span>${data.types[1].type.name}</span></span>
        </div>
        `;
        console.log(data.types[1].type.name)//Probleme affichage que des pokemon de double types
      });
  };
}

pokedex();

document.querySelector("#next").addEventListener("click", function () {
  document.querySelector("#pokemonContainer").innerHTML = "";
  startIndex += 12;
  pokedex();
  displayPrevious();
  displayNext();
});

document.querySelector("#previous").addEventListener("click", function () {
  document.querySelector("#pokemonContainer").innerHTML = "";
  startIndex -= 12;
  pokedex();
  displayPrevious();
  displayNext();
});

document.querySelector("#first").addEventListener("click", function () {
  document.querySelector("#pokemonContainer").innerHTML = "";
  startIndex = 1;
  pokedex();
  displayPrevious();
  displayNext();
});

document.querySelector("#last").addEventListener("click", function () {
  document.querySelector("#pokemonContainer").innerHTML = "";
  startIndex = 901;
  pokedex();
  displayPrevious();
  displayNext();
});

function displayPrevious() {
  if (startIndex < 13) {
    document.querySelector("#previous").style.display = "none";
    document.querySelector("#first").style.display = "none";
  } else {
    document.querySelector("#previous").style.display = "block";
    document.querySelector("#first").style.display = "block";
  }
}

function displayNext() {
  if (startIndex > 889) {
    document.querySelector("#next").style.display = "none";
    document.querySelector("#last").style.display = "none";
  } else {
    document.querySelector("#next").style.display = "block";
    document.querySelector("#last").style.display = "block";
  }
}


displayPrevious();
displayNext();

console.log(startIndex);















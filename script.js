import {fetchPokmon} from "./fetchAPI.js";
const cardContainer = document.querySelector(".card-container");

async function fetchPokmons(number) {
  for (let i = 1; i <= number; i++) {
    const pok = await fetchPokmon(i);

    createPokmon(pok)
  }
}

function createPokmon(pokemon) {
  const card = document.createElement("div");
  card.classList.add("card");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;
  card.appendChild(sprite);

  const name = document.createElement("h3");
  name.textContent = pokemon.name;
  card.appendChild(name);

  const type = document.createElement("type");
  type.textContent = pokemon.types[0].type.name;
  card.appendChild(type);

  
  if (pokemon.types[0].type.name === "grass") {
    card.style.backgroundColor = "#DEFDE0";
  }
  if (pokemon.types[0].type.name === "fire") {
    card.style.backgroundColor = "#FDDFDF";
  }
  if (pokemon.types[0].type.name === "water") {
    card.style.backgroundColor = "#DEF3FD";
  }
  if (pokemon.types[0].type.name === "bug") {
    card.style.backgroundColor = "#f8d5a3";
  }
  if (pokemon.types[0].type.name === "normal") {
    card.style.backgroundColor = "#F5F5F5";
  }
  if (pokemon.types[0].type.name === "poison") {
    card.style.backgroundColor = "#d6b3ff";
  }
  if (pokemon.types[0].type.name === "electric") {
    card.style.backgroundColor = "#FCF7DE";
  }
  if (pokemon.types[0].type.name === "ground") {
    card.style.backgroundColor = "#f4e7da";
  }
  if (pokemon.types[0].type.name === "fairy") {
    card.style.backgroundColor = "#fceaff";
  }
  if (pokemon.types[0].type.name === "fighting") {
    card.style.backgroundColor = "#d6b3ff";
  }
  if (pokemon.types[0].type.name === "ghost") {
    card.style.backgroundColor = "#e0f5ff";
  }
  if (pokemon.types[0].type.name === "rock") {
    card.style.backgroundColor = "#d5d5d4";
  }
  if (pokemon.types[0].type.name === "fighting") {
    card.style.backgroundColor = "#d6b3ff";
  }

  cardContainer.appendChild(card);
}

fetchPokmons(100);

// });

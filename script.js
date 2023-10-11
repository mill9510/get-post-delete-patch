"use strict";

import { getPets, removePets } from "./utils/pets.js";

async function init() {
  const pets = await getPets();
  console.log(pets);

  //   pets.forEach((pet) => {
  //     document.querySelector("#name").textContent = pet.name;
  //     //   document.querySelector("#imgPet").src = imagePath;
  //     document.querySelector("#species").textContent = pet.species;
  //     document.querySelector("#race").textContent = pet.race;
  //   });

  const container = document.querySelector("#pet_card");
  container.innerHTML = "";

  pets.forEach((pet) => {
    const petDiv = document.createElement("div");
    petDiv.innerHTML = `
    <h2>${pet.name}</h2>
    <h3>Species: ${pet.species}</h3>
    <h4>Race: ${pet.race}</h4>
    <p>Date of Birth: ${pet.dob}</p>
    <ul><li>Traits: ${pet.traits}<li></ul>
  `;
    container.appendChild(petDiv);
  });
}

document.querySelector("button").addEventListener("click", () => {
  removePets(7);
  init();
});

init();

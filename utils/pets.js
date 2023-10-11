"use strict";

const myApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1b2libGhqcXB4dmt6dGRtamlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY4NTE2MTYsImV4cCI6MjAxMjQyNzYxNn0.oNoBo2kBItmIqvZYDT2aABrQe32vvi-dhmSp92jEpcA";

export async function getPets() {
  let headersList = {
    apikey: myApiKey,
  };

  let response = await fetch("https://auoiblhjqpxvkztdmjis.supabase.co/rest/v1/pets", {
    method: "GET",
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

export async function postPets() {
  let headersList = {
    apikey: myApiKey,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name: "Mette",
    traits: ["Hungry", "Funny"],
  });

  let response = await fetch("https://auoiblhjqpxvkztdmjis.supabase.co/rest/v1/pets", {
    method: "POST",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  return data;
}

export async function removePets(id) {
  let headersList = {
    apikey: myApiKey,
  };

  let response = await fetch("https://auoiblhjqpxvkztdmjis.supabase.co/rest/v1/pets?id=eq." + id, {
    method: "DELETE",
    headers: headersList,
  });

  //   let data = await response.json();
  //   console.log(data);
}

export async function patchPets() {
  let headersList = {
    apikey: myApiKey,
    "Content-Type": "application/json",
  };

  let bodyContent = JSON.stringify({
    name: "Susan",
    traits: ["Sad", "Lonely"],
  });

  let response = await fetch("https://auoiblhjqpxvkztdmjis.supabase.co/rest/v1/pets?id=eq.2", {
    method: "PATCH",
    body: bodyContent,
    headers: headersList,
  });

  let data = await response.json();
  console.log(data);
}

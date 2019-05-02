"use strict";

function getDogImage(query, callback) {
  const options = { method: "GET" };
  fetch(`https://dog.ceo/api/breeds/image/random/${query}`, options)
    .then(response => response.json())
    .then(responseJson => callback(responseJson))
    .catch(error => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  console.log(responseJson);
  const html = responseJson.message.map(function(image) {
    return `<li><img src="${image}" class="results-img"/></li>`;
  });

  $(".results")
    .html(html)
    .removeClass("hidden");
}

function watchForm() {
  $("form").submit(event => {
    event.preventDefault();
    const numberOfDogs = $("#query").val();
    getDogImage(numberOfDogs, displayResults);
  });
}

$(function() {
  console.log("App loaded! Waiting for submit!");
  watchForm();
});
// VVVV SEARCH BREED VVV //

// vvv FIND DOGS BY BREED vvv //

function getApiData(searchBreed, breedCallback) {
  // const SEARCH_URL = `https://dog.ceo/api/breed/${searchBreed}/images/random`;
  // $.getJSON(SEARCH_URL, breedCallback);
  fetch(`https://dog.ceo/api/breed/${searchBreed}/images/random`)
    .then(response => response.json())
    .then(responseJson => breedCallback(responseJson));
}

function displayResultsData(data) {
  console.log(data);
  const html = data.message.map(function(image) {
    return `<li><img src="${image}" class="results-img"/></li>`;
  });
  $(".results")
    .html(html)
    .removeClass("hidden");
}
function displayResultsData(data) {
  let results;
  console.log(data);
  if (data === "success") {
    results = `
    <li><img src="${data}" class="breed-results-img"/></li>
  `;
  } else {
    results =
      "Either that breed is not in our database our you just made up a new dog! STOP IT!!!";
  }

  $(".results")
    .html(html)
    .removeClass("hidden");
}

function displayResultsData(data) {
  console.log(data);
let results;
if (data.status == "success") {
  results = `
    <li><img src="${data}" class="breed-results-img"/></li>
  `;
} else {
  results =
    "Either that breed is not in our database our you just made up a new dog! STOP IT!!!";
}
$('.breed').html(results).prop('hidden',false)
  $(".breed-results")
    .html(results)
    .removeClass("hidden");
}

function breedWatchFrom() {
  $(".js-breed").click(".breed", function(e) {
    let queryTarget = $(e.currentTarget).find(".js-query-breed");
    let breedOfDog = queryTarget.val();
    //const breedOfDog = $("#breed-query").val();
    getApiData(breedOfDog, displayResultsData);
  });
}
$(breedWatchFrom);
// ^^^ END DOGS BY BREED ^^^ //

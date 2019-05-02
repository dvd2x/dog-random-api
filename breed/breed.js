function getDataFromApi(searchTerm, callback) {
  const SEARCH_URL = `https://dog.ceo/api/breed/${searchTerm}/images/random`;
  $.getJSON(SEARCH_URL, callback);
}

function displaySearchData(data) {
  $(".js-search-results").html(`<img src="${data.message}">`);
}

function watchSubmit() {
  $(".js-search-form").submit(event => {
    event.preventDefault();
    let queryTarget = $(event.currentTarget).find(".js-query");
    let query = queryTarget.val();
    // clear out the input
    queryTarget.val("");
    getDataFromApi(query, displaySearchData);
  });
}

$(watchSubmit);

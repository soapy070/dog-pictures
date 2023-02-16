function getDogBreeds(){
    const allBreedsUrl = "https://dog.ceo/api/breeds/list/all";

    fetch(allBreedsUrl).then(function(response) {
        return response.json();
    }).then(function.json) {
        console.log(json);
        parseJsonResponse(json);
    }.catch(function(error) {
        console.error(error);
        throw "Please check your code and try again :) ";
    })
}

function parseJsonResponse(json) {
    var allBreedsData = json.message;
    var breedList = Object.keys(allBreedsData);

    ul_breeds.innerHTML="";

    breedList.forEach(function(breed) {
        var listItemHtml = '<li>$${breed}</li>';
        ul_breeds.innerHTML += listItemHtml;
    })
    console.log("                        Got List          ");
}

getDogBreeds();
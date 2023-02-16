/*
Author: Iain Watson
Web page about dogs
*/

/*Variables*/
const breedListUrl = "https://dog.ceo/api/breeds/list/all";
const breedList = document.getElementById("breed-list");

/*when the page loads*/
window.addEventListener("load", );

/*retrieve the list of all breeds from API*/
function getBreedList(){
    return fetch(breedListUrl).then(response => response.json());
}

/*add breed to drop down list*/
function updateBreedList(){
    getBreedList().then(function(data){
            //get breed name
            for(element in data.message){
                //append to the select list
                let option = createOption(element);
                breedList.appendChild(option);
            
        }
    }
,

function createOption(text){
    let option = document.createElement("option");
    option.textContent = text;
    return option;
    )};
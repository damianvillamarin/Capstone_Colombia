"use strict"

let locationsArray = []
let nationalParksArray = []
let parkTypesArray = []

const list = document.getElementById('locations');

window.onload = function(){

    loadJsonData("assets/data/locations.json").then((locations) => {
        locationsArray = locations;
        locationsArray.forEach(element => {
            list.insertAdjacentHTML('beforeend', `<option name=${element}>${element}</option>`);
        });
    })

    loadJsonData("assets/data/nationalparks.json").then((nationalParks) => {
        nationalParksArray = nationalParks.parks;
    })

    loadJsonData("assets/data/parktypes.json").then((parkTypes) => {
        parkTypesArray = parkTypes;
    })

}

let loadJsonData = async (path) => {
    let response = await fetch(path)
    let data = await response.json()
    return data
}


"use strict";
//fecth the json file
document.addEventListener("DOMContentLoaded", getJson);

async function getJson(){
    let dataJson = await fetch("https://kea-alt-del.dk/kata-distortion/");
    let myJson = await dataJson.json;
    console.log(myJson);
}
//put into the template

//refresh every 10 sec

//animation

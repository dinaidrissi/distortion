"use strict";
//fecth the json file
document.addEventListener("DOMContentLoaded", getJson);

async function getJson(){
    let dataJson = await fetch("https://kea-alt-del.dk/kata-distortion/");
    let myJson = await dataJson.json();
    console.log(myJson);

}
//put into the template
functin showData(data){
    let list = document.querySelector("#info");
    let myTemplate = document.querySelector("#infostemplate").content;

    let clone = myTemplate.cloneNode(true);
   clone.querySelector("#infoscontainer").textContent = list.inQueue;
   console.log(list.inQueue);
}
//refresh every 10 sec
setTimeout(function(){
    window.location.reload(1);
 }, 5000);

//animation

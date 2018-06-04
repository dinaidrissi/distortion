"use strict";
document.addEventListener("DOMContentLoaded",getData);
setInterval(()=>{
    getData();
    document.querySelector("#list").innerHTML = "";
}, 10000);
async function getData() {  
let jsonData = await fetch("https://kea-alt-del.dk/kata-distortion/");
 let myJson = await jsonData.json();
console.log(myJson);
showData(myJson);

 }
 
 function showData(data){
    let list = document.querySelector("#list");
    let template = document.querySelector("#template").content;
    
        let clone = template.cloneNode(true);
        let queue = clone.querySelector("#queue");
        queue.textContent = data.inQueue;
        queue.style.width = 4 * data.inQueue + "%";
        clone.querySelector("#name").textContent = data.name;
        clone.querySelector("#idNumber").textContent = data.id;
        clone.querySelector("#loggedAt").textContent = data.loggedAt;
        list.appendChild(clone);
}
// //fecth the json file
// document.addEventListener("DOMContentLoaded", getJson);

// async function getJson(){
//     let dataJson = await fetch("https://kea-alt-del.dk/kata-distortion/");
//     let myJson = await dataJson.json();
//     console.log(myJson);

// }
// //put into the template
// function showData(data){
//     let list = document.querySelector("#infostemplate");
//     let myTemplate = document.querySelector("#info").content;

//     let clone = list.cloneNode("true");
//    //clone.querySelector(".queue").textContent = list.inQueue;
//    console.log(clone.querySelector(".queue").textContent);
//    myTemplate.appendChild(clone);
// }
// //refresh every 10 sec
// setTimeout(function(){
//     window.location.reload(1);
//  }, 5000);

// //animation

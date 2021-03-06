"use strict";
document.addEventListener("DOMContentLoaded",getData);
setTimeout(function(){
    window.location.reload(1);
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
        queue.textContent = "Queue number: " + data.inQueue;
        
        clone.querySelector("#name").textContent = data.name;
        clone.querySelector("#idNumber").textContent = "Id number: " + data.id;
        clone.querySelector("#loggedAt").textContent = "Logged in at: " +data.loggedAt;

       
            var meter_value = semi_cf - ((data.inQueue * semi_cf) / 25);
            mask.setAttribute('stroke-dasharray', meter_value + ',' + cf);
            meter_needle.style.transform = 'rotate(' + (270 + ((data.inQueue * 180) / 25)) + 'deg)';
            // lbl.textContent = data.inQueue;
        
        list.appendChild(clone);
}
 /* set radius for all circles */
 var r = 400;
 var circles = document.querySelectorAll('.circle');
 var total_circles = circles.length;
 for (var i = 0; i < total_circles; i++) {
     circles[i].setAttribute('r', r);
 } 

/* set meter's wrapper dimension */
var meter_dimension = (r * 2) + 100;
var wrapper = document.querySelector('#wrapper');
wrapper.style.width = meter_dimension + 'px';
wrapper.style.height = meter_dimension + 'px';
/* add strokes to circles  */
var cf = 2 * Math.PI * r;
var semi_cf = cf / 2;
var semi_cf_1by3 = semi_cf / 3;
var semi_cf_2by3 = semi_cf_1by3 * 2;
document.querySelector('#outline_curves')
    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
document.querySelector('#low')
    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
document.querySelector('#avg')
    .setAttribute('stroke-dasharray', semi_cf_2by3 + ',' + cf);
document.querySelector('#high')
    .setAttribute('stroke-dasharray', semi_cf_1by3 + ',' + cf);
document.querySelector('#outline_ends')
    .setAttribute('stroke-dasharray', 2 + ',' + (semi_cf - 2));
document.querySelector('#mask')
    .setAttribute('stroke-dasharray', semi_cf + ',' + cf);
/*bind range slider event*/
var slider = document.querySelector('#slider');
// var lbl = document.querySelector("#lbl");
var mask = document.querySelector('#mask');
var meter_needle =  document.querySelector('#meter_needle');




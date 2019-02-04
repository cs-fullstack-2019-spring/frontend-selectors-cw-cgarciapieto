var pTagId = document.getElementById("first");
console.log(pTagId);

var pTagclass = document.getElementsByClassName('special');
console.log(pTagclass[0]);

var pTagSpecial = document.querySelector("special");
console.log(pTagSpecial);

var pTagspecialAll = document.querySelectorAll("p");
console.log(pTagspecialAll);


var pTag = document.getElementsByTagName('p');
console.log(pTag[0]);

var h1Tag = document.getElementsByTagName('h1');
h1Tag[0].style.color = "blue";

var pId = document.getElementById('last');
pId.style.color = "yellow";
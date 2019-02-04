// Prints the first p tag to the console using the ID, class, and tag selectors.


    var pTagId = document.getElementById("first");
console.log(pTagId);

var pTagclass = document.getElementsByClassName('special');
console.log(pTagclass[0]);


// 2) Prints the special class using both the query selector and query all selector.

var pTagSpecial = document.querySelector("special");
console.log(pTagSpecial);

var pTagspecialAll = document.querySelectorAll("p");
console.log(pTagspecialAll);

var pTag = document.getElementsByTagName('p');
console.log(pTag[0]);
//turns h1 tag blue
var h1Tag = document.getElementsByTagName('h1');
h1Tag[0].style.color = "blue";

//changes last p tag to yellow using an ID
var pId = document.getElementById('last');
pId.style.color = "yellow";
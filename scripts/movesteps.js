// Image switcher code

// var myImage = document.querySelector('img');

// myImage.onclick = function() {
// 	var mySrc = myImage.getAttribute('src');
// 	if(mySrc === 'images/firefox-icon.png') {
//       myImage.setAttribute ('src','images/firefox2.png');
// 	} else {
// 	  myImage.setAttribute ('src','images/firefox-icon.png');
// 	}
// }

// Personalized welcome message code

// var myButton = document.querySelector('button');

document.querySelector('playAudio').play();
function setUserName() {
  var myName = prompt("Wizard's name.");
}
setUserName();
// var button = document.querySelector('viewDiv')


var const path = [-575, -595 ,-610]
document.getElementById("masashi").style.left=600+'px';
var x=0
function time1(){
  x++;
  x=x%3;
var character = document.getElementById("masashi")
var character.style.left=path[x]+'px';
}setInterval("time1()",500)



// setTimeout(function(){character.style.left=-600+'px'},1000)
// setTimeout(function(){character.style.left=-650+'px'},1000)


// for(var i=0;i<=2;i++)  {
//     setTimeout(
//       (function (i){ 
//       return function() {
//         character.style.left=(path[i] + "<br>")
//       }
//     })(i),i * 1000)
//    } 
// move()





















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
var myHeading = document.querySelector('.swear');

function setUserName() {
  var myName = prompt("Wizard's name.");
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Happy New Year,<br/>  &#x2767;' + myName;
}

if(!localStorage.getItem('name')) {
  // showDiv();
  setUserName();
  
} else {
  // var storedName = localStorage.getItem('name');
  myHeading.innerHTML = ' I solemnly swear<br/>I am <br/>up to no good';

}


function showDiv() {  
  var x = document.querySelector(".viewDiv");
  x.style.display = "block";
}

myHeading.onclick = function() {
  setUserName();
  showDiv()
}

document.querySelector('playAudio').play();

// var button = document.querySelector('viewDiv')

























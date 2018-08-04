// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');
myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/EzY57qY9qQs.jpg') {
    myImage.setAttribute('src', 'images/EzY57qY9qQs.png');
  } else {
    myImage.setAttribute('src', 'images/EzY57qY9qQs.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Как тебя называть?', '');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Теория музыки - это клёво, ' + myName;
}

var myHeading = document.querySelector('h1');
myHeading.onclick = function() {
  if (confirm('Изменить имя?')) {
    myName = prompt('Как тебя называть?', '');
    if (myName != null) {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Теория музыки - это клёво, ' + myName;
    }
  }
}

if (!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Теория музыки - это клёво, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

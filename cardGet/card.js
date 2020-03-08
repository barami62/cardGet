var message = '';
var cardgen = [
  {
    name: "Card 1",
    attack:  30,
    defend: 10,
    description: "Spider"
  },
  {
    name: "Card 2",
    attack:  35,
    defend: 15,
    description: "Orc"
  },
  {
    name: "Card 3",
    attack:  20,
    defend: 10,
    description: "Rat"
  },
  {
    name: "Card 4",
    attack:  50,
    defend: 15,
    description: "Zombie"
  }
];

var cardDeck = [
  {
    name: "pal",
    type: "normal",
    link: "https://i.ibb.co/qg42C90/pal.png"
  }
];

function cardGen() {
  var i = Math.floor(Math.random()*(cardgen.length));
  document.getElementById('pcardGen').innerHTML = message;
  message = '<h3>' + cardgen[i].name + '</h3>';
  message += '<p> Attack: ' + cardgen[i].attack + '</p>';
  message += '<p> Defend: ' + cardgen[i].defend + '</p>';
  message += '<p> Type: ' + cardgen[i].description + '</p>';
}


function cardDraw() {
  var i = Math.floor(Math.random()*(cardDeck.length));
  var myDiv = document.createElement("span");
  myDiv.classList.add("cardBlo");
  var mess = '<img class=\'card3\' src= ' + cardDeck[i].link + '>';
  myDiv.innerHTML = mess;
  document.querySelector('.card2').appendChild(myDiv);
}

function test2() {
  var i = Math.floor(Math.random()*(cardDeck.length));
  var myDiv = document.createElement("div");
  var mess = '<img class=\'card3\' src= ' + cardDeck[i].link + '>';
  myDiv.innerHTML = mess;
  document.querySelector('.card2').appendChild(myDiv);
}
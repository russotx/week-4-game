$(document).ready(function() {

// Array of character objects
var allCharacters = [
  Brutus = {
    "name"    : "Brutus",
    "hitPts"  : 150,
    "attPwr"  : 4,
    "attBase" : 4,
    "cntrPwr" : 4,
    "deadCSS" : "",
    "battleCSS" : "",
    "waitCSS" : "",

    "avatar" : function () {
      assignAttribute("class",charAvatar);
    }
  },

  Linus = {
    "name"    : "Linus",
    "hitPts"  : 100,
    "attPwr"  : 6,
    "attBase" : 6,
    "cntrPwr" : 6,
    "deadCSS" : "",
    "battleCSS" : "",
    "waitCSS" : "",

    "avatar" : function () {
      assignAttribute("class",charAvatar);
    }
  },

  Dork = {
    "name"    : "Dork",
    "hitPts"  : 200,
    "attPwr"  : 2,
    "attBase" : 2,
    "cntrPwr" : 2,
    "deadCSS" : "",
    "battleCSS" : "",
    "waitCSS" : "",

    "avatar" : function () {
      assignAttribute("class",charAvatar);
    }
  },

  Hombre = {
    "name"    : "Hombre",
    "hitPts"  : 80,
    "attPwr"  : 8,
    "attBase" : 8,
    "cntrPwr" : 8,
    "deadCSS" : "",
    "battleCSS" : "",
    "waitCSS" : "",

    "avatar" : function () {
      assignAttribute("class",charAvatar);
    }
  }
  ];
/* -------END OF CHAR OBJECT ARRAY---------- */

// create variables assigned to the characters in the char array
// for easy access of character data.
var char0 = allCharacters[0];
var char1 = allCharacters[1];
var char2 = allCharacters[2];
var char3 = allCharacters[3];

var gameFeed = {
  "begin" : "Choose your warrior!"
};

function buildCharBtns () {
  // Build chars
  for (var i=0;i<allCharacters.length;i++)
  {
    var counterPower = $(".cntrPwr");
    var characterName = $(".charName");
    var hitPoints = $(".hitPts");
    var currentChar = allCharacters[i];
    $('[data-char="char'+i+'"]').find(counterPower).text(currentChar.cntrPwr);
    $('[data-char="char'+i+'"]').find(characterName).text(currentChar.name);
    $('[data-char="char'+i+'"]').find(hitPoints).text(currentChar.hitPts);
  }
}


function initGame() {
  buildCharBtns();
}

function chooseChar() {
  var choice = $(this).attr("data-char");
  console.log(choice);
  var userChar = {}
  switch (choice) {
    case ("char0") : Object.assign(userChar,char0);
    break;
    case ("char1") : Object.assign(userChar,char1);
    break;
    case ("char2") : Object.assign(userChar,char2);
    break;
    case ("char3") : Object.assign(userChar,char3);
    break;
  }
  console.log(this);
  console.log(userChar);
  //moveChar(userChar);
}

function gameAction() {

}

function rpgGame(){
  initGame();
  $("#feedText").text(gameFeed.begin);
  $(".charBtn").on("click",chooseChar);


}

rpgGame();






}); //------ end of document ready function





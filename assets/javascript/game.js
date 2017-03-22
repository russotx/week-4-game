$(document).ready(function() {

// Array of character objects
var allCharacters = [
  Brutus = {
    "name"    : "Brutus",
    "hitPts"  : 150,
    "attBase" : 4,
    "cntrPwr" : 4,
    "deadCSS" : "",
    "battleCSS" : "",
    "waitCSS" : "",
    "isHero"  : false,
    "isEnemy" : false,

    "setUser" : function () {
      this.isHero = true;
    },

    "setEnemy" : function () {
      this.isEnemy = true;
    },

    "dead" : function () {
      this.isEnemy = false;
    },

    // returns an html avatar based on the character buttons from
    // the start of the game.
    "avatar" : function () {
      var theButton = $('[data-char="char0"]');
      var theNewDiv = $("<div>");
      theNewDiv.addClass((theButton.attr("class")));
      theNewDiv.attr("id","theHero");
      var copyHTML = theButton.html();
      $(theNewDiv).html(copyHTML);
      return $(theNewDiv);
    }

  },

  Linus = {
    "name"    : "Linus",
    "hitPts"  : 100,
    "attBase" : 6,
    "cntrPwr" : 6,
    "deadCSS" : "",
    "battleCSS" : "",
    "waitCSS" : "",
    "isHero" : false,
    "isEnemy" : false,


    "setUser" : function () {
      this.isHero = true;
    },

    "setEnemy" : function () {
      this.isEnemy = true;
    },

    "dead" : function () {
      this.isEnemy = false;
    },

    "avatar" : function () {
      var theButton = $('[data-char="char1"]');
      var theNewDiv = $("<div>");
      theNewDiv.addClass((theButton.attr("class")));
      theNewDiv.attr("id","theHero");
      var copyHTML = theButton.html();
      $(theNewDiv).html(copyHTML);
      return $(theNewDiv);
    }
  },

  Dork = {
    "name"    : "Dork",
    "hitPts"  : 200,
    "attBase" : 2,
    "cntrPwr" : 2,
    "deadCSS" : "",
    "battleCSS" : "",
    "waitCSS" : "",
    "isHero" : false,
    "isEnemy" : false,

    "setUser" : function () {
      this.isHero = true;
    },

    "setEnemy" : function () {
      this.isEnemy = true;
    },

    "dead" : function () {
      this.isEnemy = false;
    },

    "avatar" : function () {
      var theButton = $('[data-char="char2"]');
      var theNewDiv = $("<div>");
      theNewDiv.addClass((theButton.attr("class")));
      theNewDiv.attr("id","theHero");
      var copyHTML = theButton.html();
      $(theNewDiv).html(copyHTML);
      return $(theNewDiv);
    }
  },

  Hombre = {
    "name"    : "Hombre",
    "hitPts"  : 80,
    "attBase" : 8,
    "cntrPwr" : 8,
    "deadCSS" : "",
    "battleCSS" : "",
    "waitCSS" : "",
    "isHero" : false,
    "isEnemy" : false,


    "setUser" : function () {
      this.isHero = true;
    },

    "setEnemy" : function () {
      this.isEnemy = true;
    },

    "dead" : function () {
      this.isEnemy = false;
    },

    "avatar" : function () {
      var theButton = $('[data-char="char3"]');
      var theNewDiv = $("<div>");
      theNewDiv.addClass((theButton.attr("class")));
      theNewDiv.attr("id","theHero");
      var copyHTML = theButton.html();
      $(theNewDiv).html(copyHTML);
      return $(theNewDiv);
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
var battleOver = true;
var bodyCount = 0;

var gameFeed = {
  "begin" : "Choose your hero!",
  "battle" : "Fight to the death!",
  "pickFoe" : "Choose your oponent!",
  "loser" : "You're dead fool.",
  "winner" : "Congrats you killed someone!",
  "victory" : "Congrats you killed errrybody!"
};

/*----------END OF GLOBAL VARIABLES------------ */


function findHero() {
  for (var i = 0; i<allCharacters.length; i++){
    if (allCharacters[i].isHero) {
      return allCharacters[i];
    }
  }
}

function findEnemy(){
  for (var i = 0; i<allCharacters.length; i++){
    if (allCharacters[i].isEnemy) {
      return allCharacters[i];
    }
  }
}

function initGame() {
  // dynamically build the character buttons
  buildCharBtns();
}


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


function chooseChar() {
  var choice = $(this).attr("data-char");
  switch (choice) {
    // depending on user choice this will change that character object's
    // isHero property to true.
    case ("char0") : char0.setUser();
    break;
    case ("char1") : char1.setUser();
    break;
    case ("char2") : char2.setUser();
    break;
    case ("char3") : char3.setUser();
    break;
  }

  // move the hero to the hero base
  // function also calls the createEnemyQ function
  // to move all the other characters to a waiting queue
  $(".charBtn").off("click");

  moveHero();

} /*--- end of choose Char --- */



//--------MOVE THE USER'S CHAR TO THE FIGHTING AREA--------

function moveHero(){
  switch (true) {
    // checks to find out which character is the hero
    case (char0.isHero) :
      // creates the avatar of the hero in the hero base area of the document
      // avatar is not a button
      $("#heroBase").html(char0.avatar());
      // pass the list of enemies to the createEnemyQ function
      createEnemyQ(1,2,3);
      // empty the character Queue AFTER enemy queue is created
      $("#charQ").find('[data-char="char0"]').remove();
      break;
    case (char1.isHero) :
      // creates the avatar of the hero in the hero base area of the document
      // avatar is not a button
      $("#heroBase").html(char1.avatar());
      // pass the list of enemies to the createEnemyQ function
      createEnemyQ(0,2,3);
      // empty the character Queue AFTER enemy queue is created
      $("#charQ").find('[data-char="char1"]').remove();
      break;
    case (char2.isHero) :
      // creates the avatar of the hero in the hero base area of the document
      // avatar is not a button
      $("#heroBase").html(char2.avatar());
      // pass the list of enemies to the createEnemyQ function
      createEnemyQ(0,1,3);
      // empty the character Queue AFTER enemy queue is created
      $("#charQ").find('[data-char="char2"]').remove();
      break;
    case (char3.isHero) :
      // creates the avatar of the hero in the hero base area of the document
      // avatar is not a button
      $("#heroBase").html(char3.avatar());
      // pass the list of enemies to the createEnemyQ function
      createEnemyQ(0,1,2);
      // empty the character Queue AFTER enemy queue is created
      $("#charQ").find('[data-char="char3"]').remove();
      break;
  }
      $(".enemyBtn").on("click",chooseEnemy);


}
//----------- end of move hero ---------------------

function chooseEnemy(){
 if (battleOver) {
   var choice = $(this).attr("data-char");
    switch (choice) {
      // depending on user choice this will change that character object's
      // isHero property to true.
      case ("char0") : char0.setEnemy();
      break;
      case ("char1") : char1.setEnemy();
      break;
      case ("char2") : char2.setEnemy();
      break;
      case ("char3") : char3.setEnemy();
      break;
    }


    // move the enemy to the enemy base
     battleOver = false;
     moveEnemy();
  }
}

function moveEnemy(){
 // var enemy = {};
  switch (true) {
    // checks to find out which character is the active enemy
    case (char0.isEnemy) :
      $("#enemyBase").html(char0.avatar());
      $("#enemyBase").find(".enemyBtn").removeAttr("id","theHero");
      $("#enemyBase").find(".enemyBtn").attr("id","theEnemy");
      $("#enemyQ").find('[data-char="char0"]').remove();
      //enemy=Object.assign(char0);
      break;
    case (char1.isEnemy) :
      $("#enemyBase").html(char1.avatar());
      $("#enemyBase").find(".enemyBtn").removeAttr("id","theHero");
      $("#enemyBase").find(".enemyBtn").attr("id","theEnemy");
      $("#enemyQ").find('[data-char="char1"]').remove();
      //enemy=Object.assign(char1);
      break;
    case (char2.isEnemy) :
      $("#enemyBase").html(char2.avatar());
      $("#enemyBase").find(".enemyBtn").removeAttr("id","theHero");
      $("#enemyBase").find(".enemyBtn").attr("id","theEnemy");
      $("#enemyQ").find('[data-char="char2"]').remove();
      //enemy=Object.assign(char2);
      break;
    case (char3.isEnemy) :
      $("#enemyBase").html(char3.avatar());
      $("#enemyBase").find(".enemyBtn").removeAttr("id","theHero");
      $("#enemyBase").find(".enemyBtn").attr("id","theEnemy");
      $("#enemyQ").find('[data-char="char3"]').remove();
     // enemy=Object.assign(char3);
      break;
  }

  beginBattle();

}

function beginBattle() {
  var theHero = findHero();
  console.log("the hero is "+theHero.name);
  var theEnemy = findEnemy();
  console.log("the enemy is "+theEnemy.name);

  var counterPower = $(".cntrPwr");
  var characterName = $(".charName");
  var hitPoints = $(".hitPts");

  $("#attack").on("click", function() {
    if(bodyCount===3) {
      battleOver = true;
      $("#feedText").text(gameFeed.victory);
    }
    else if ((theEnemy.hitPts > 0) && (theHero.hitPts > 0)) {
      $("#feedText").text(gameFeed.battle);
      theEnemy.hitPts-=theHero.cntrPwr;
      $("#theEnemy").find(hitPoints).text(theEnemy.hitPts);
      theHero.hitPts-=theEnemy.cntrPwr;
      theHero.cntrPwr+=theHero.attBase;
      $("#theHero").find(counterPower).text(theHero.cntrPwr);
      $("#theHero").find(hitPoints).text(theHero.hitPts);
      console.log("hero life: "+theHero.hitPts);
      console.log("enemy life: "+theEnemy.hitPts);
    } else if (theHero.hitPts<=0) {
       $("#feedText").text(gameFeed.loser);
       $("#theHero").css("background-color","gray");
    } else if (theEnemy.hitPts <= 0) {
       $("#attack").off("click");
       bodyCount++;
       $("#feedText").text(gameFeed.winner);
       $("#theEnemy").css("background-color","gray");
       theEnemy.dead();
       battleOver = true;
    }

  });
}

//----------- CREATE THE QUEUE OF ENEMIES TO CHOOSE FROM ---------------
//
// create the enemy queue for the user to choose a foe
// queue will consist of buttons
function createEnemyQ(x,y,z){
  // based on the variables passed in this will grab the enemy buttons
  // matching the data-char value and add them to the
  // enemyqueue area of the document.
  var enemy1 = $('[data-char="char'+x+'"]');
  enemy1.removeClass("charBtn");
  enemy1.addClass("enemyBtn");
  var enemy2 = $('[data-char="char'+y+'"]');
  enemy2.removeClass("charBtn");
  enemy2.addClass("enemyBtn");
  var enemy3 = $('[data-char="char'+z+'"]');
  enemy3.removeClass("charBtn");
  enemy3.addClass("enemyBtn");
  var enemyQueue = $("#enemyQ");
  enemyQueue.append(enemy1);
  enemyQueue.append(enemy2);
  enemyQueue.append(enemy3);
}


function rpgGame(){
  initGame();
  $("#feedText").text(gameFeed.begin);
  $(".charBtn").on("click",chooseChar);

}

rpgGame();






}); //------ end of document ready function





$(document).ready(function() {
var counterAttack = Math.floor((Math.random() * 10) + 1)
var counterAttackTwo = Math.floor((Math.random() * 15) + 1)
var counterAttackThree = Math.floor((Math.random() * 15) + 1)
var counterAttackFour = Math.floor((Math.random() * 20) + 10)
var attack = Math.floor((Math.random() * 60) + 25)
var attackTwo = Math.floor((Math.random() * 50) + 25)
var attackThree = Math.floor((Math.random() * 50) + 20)
var attackFour = Math.floor((Math.random() * 50) + 20)
var selection = [];
// character info
let characters = {
    'yoda': {
        name: 'yoda',
        hp: 140,
    },
    'luke': {
        name: 'luke',
        hp: 140,
    },
    'mace': {
        name: 'mace',
        hp: 115,
    },
    'kenobi': {
        name: 'kenobi',
        hp: 130,
    },
    'kit': {
        name: 'kit',
        hp: 120,
    },
    'kyle': {
        name: 'kyle',
        hp: 120,
    },
    'vader': {
        name: 'vader',
        hp: 130,
    },
    'sidious': {
        name: 'sideous',
        hp: 150,
    },
    'bane': {
        name: 'bane',
        hp: 130,
    },
    'revan': {
        name: 'revan',
        hp: 130,
        }
            }
// initial arena text
$('#arenaText').text("Pick A Jedi!");
$('#dark').hide();
// yoda start
$('#yoda').click(function() { 
    selection = characters.yoda;
    $('#mace').hide();
    $('#kenobi').hide();
    $('#luke').hide();
    $('#kit').hide();
    $('#kyle').hide();
        $('#lightArenaText').text("HP "+selection.hp);
        $('#arenaText').text("").append("<button id='fight'>Click To Fight!</button>");
            $("#yoda").appendTo("#lightArena"); 
            $('#dark').show();
  
            // $('#lightSaber').play(); 
});
// luke start
$('#luke').click(function() { 
    selection = characters.luke;
    $('#mace').hide();
    $('#yoda').hide();
    $('#kenobi').hide();
    $('#kit').hide();
    $('#kyle').hide();
        $('#lightArenaText').text("HP "+selection.hp);
        $('#arenaText').text("").append("<button id='fight'>Click To Fight!</button>");
            $("#luke").appendTo("#lightArena");
            $('#dark').show();

            // $('#lightSaber').play(); 
});
// mace start
$('#mace').click(function() { 
    selection = characters.mace;
    $('#kenobi').hide();
    $('#yoda').hide();
    $('#luke').hide();
    $('#kit').hide();
    $('#kyle').hide();
        $('#lightArenaText').text("HP "+selection.hp);
        $('#arenaText').text("").append("<button id='fight'>Click To Fight!</button>");
            $("#mace").appendTo("#lightArena");
            $('#dark').show();

            // $('#lightSaber').play(); 
});
// kenobi start
$('#kenobi').click(function() { 
    selection = characters.kenobi;
    $('#mace').hide();
    $('#yoda').hide();
    $('#luke').hide();
    $('#kit').hide();
    $('#kyle').hide();
        $('#lightArenaText').text("HP "+selection.hp);
        $('#arenaText').text("").append("<button id='fight'>Click To Fight!</button>");
            $("#kenobi").appendTo("#lightArena");
            $('#dark').show();

            // $('#lightSaber').play(); 

});
// kit fisto start
$('#kit').click(function() { 
    selection = characters.kit;
    $('#mace').hide();
    $('#kenobi').hide();
    $('#luke').hide();
    $('#kyle').hide();
    $('#yoda').hide();
        $('#lightArenaText').text("HP "+selection.hp);
        $('#arenaText').text("").append("<button id='fight'>Click To Fight!</button>");
            $("#kit").appendTo("#lightArena");  
            $('#dark').show();
 
            // $('#lightSaber').play(); 
});
// kyle katarn start
$('#kyle').click(function() { 
    selection = characters.kyle;
    $('#mace').hide();
    $('#kenobi').hide();
    $('#luke').hide();
    $('#yoda').hide();
    $('#kit').hide();
        $('#lightArenaText').text("HP "+selection.hp);
        $('#arenaText').text("").append("<button id='fight'>Click To Fight!</button>");
            $("#kyle").appendTo("#lightArena");   
            $('#dark').show();
            // $('#lightSaber').play(); 
});
// fight button after jedi pick 
$('body').on('click', '#fight', function () {
    $('#darkArenaText').text("HP "+characters.vader.hp);
    $('#arenaText').text("");
    $('#arenaText').text("").append("<button id='attack1'>Attack!</button>");
    $('#vader').appendTo("#darkArena");

  });
// first attack sequence vs vader
$('body').on('click', '#attack1', function () {
    characters.vader.hp = characters.vader.hp - attack;
    selection.hp = selection.hp - counterAttack;
    $('#darkArenaText').text("HP "+characters.vader.hp);
    $('#lightArenaText').text("HP "+selection.hp);
    console.log(selection);

    if (characters.vader.hp <= 0) {
        $('#darkArenaText').text("HP "+characters.revan.hp);
        $('#arenaText').text("");
        $('#vader').hide();
        $('#revan').appendTo("#darkArena");
        $('#arenaText').text("").append("<button id='attack2'>Attack!</button>");
        $('body').unbind('click');
    }
    else if (selection.hp <= 0 ) {
        $('#arenaText').text("You Have Failed Young Padawan.");
        $('#lightArenaText').text('');
        $("#lightArena").hide();
        $('#sidious').hide();
        $('#darkArenaText').text("");  
    }
// second attack sequence vs revan
$('body').on('click', '#attack2', function () {
    characters.revan.hp = characters.revan.hp - attackTwo;
    selection.hp = selection.hp - counterAttackTwo;
    $('#darkArenaText').text("HP "+characters.revan.hp);
    $('#lightArenaText').text("HP "+selection.hp);
    console.log(selection);


    if (characters.revan.hp <= 0) {
        $('#darkArenaText').text("HP "+characters.bane.hp);
        $('#arenaText').text("");
        $('#revan').hide();
        $('#bane').appendTo("#darkArena");
        $('#arenaText').text("").append("<button id='attack3'>Attack!</button>");
        $('body').unbind('click');  
    }
    else if (selection.hp <= 0 ) {
        $('#arenaText').text("You Have Failed Young Padawan.");
        $('#lightArenaText').text('');
        $("#lightArena").hide();
        $('#sidious').hide();
        $('#darkArenaText').text("");  
    }
// third attack sequence vs bane
$('body').on('click', '#attack3', function () {
        characters.bane.hp = characters.bane.hp - attackThree;
        selection.hp = selection.hp - counterAttackThree;
        $('#darkArenaText').text("HP "+characters.bane.hp);
        $('#lightArenaText').text("HP "+selection.hp);
        console.log(selection);

    if (characters.bane.hp <= 0) {
        $('#darkArenaText').text("HP "+characters.sidious.hp);
        $('#arenaText').text("");
        $('#bane').hide();
        $('#sidious').appendTo("#darkArena");
        $('#arenaText').text("").append("<button id='attack4'>Attack!</button>");
        $('body').unbind('click'); 
    }
    else if (selection.hp <= 0 ) {
        $('#arenaText').text("You Have Failed Young Padawan.");
        $('#lightArenaText').text('');
        $("#lightArena").hide();
        $('#sidious').hide();
        $('#darkArenaText').text("");  
    }
    // fourth attack sequence vs sidious
$('body').on('click', '#attack4', function () {
        characters.sidious.hp = characters.sidious.hp - attackFour;
        selection.hp = selection.hp - counterAttackFour;
        $('#darkArenaText').text("HP "+characters.sidious.hp);
        $('#lightArenaText').text("HP "+selection.hp);
        console.log(selection);

    if (characters.sidious.hp <= 0) {
        $('#sidious').hide();
        $('#arenaText').text("Master Jedi, You Have Defeated All Enemies!");
        $('#darkArenaText').text("");
        $('#lightArenaText').text('');

    }

    else if (selection.hp <= 0 ) {
        $('#arenaText').text("You Have Failed Young Padawan.");
        $('#lightArenaText').text('');
        $("#lightArena").hide();
        $('#sidious').hide();
        $('#darkArenaText').text("");   
    }      
}); 
});    
});
});
});
// new game button function
function newgame() {
    location.reload();
}
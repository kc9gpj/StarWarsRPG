$(document).ready(function() {
var winCounter = [];
var lossCounter = [];
var counterAttack = Math.floor((Math.random() * 10) + 1)
var counterAttackTwo = Math.floor((Math.random() * 15) + 1)
var counterAttackThree = Math.floor((Math.random() * 20) + 1)
var counterAttackFour = Math.floor((Math.random() * 25) + 10)
var attack = Math.floor((Math.random() * 50) + 20)
var attackTwo = Math.floor((Math.random() * 50) + 20)
var attackThree = Math.floor((Math.random() * 45) + 15)
var attackFour = Math.floor((Math.random() * 40) + 15)
var selection = [];
console.log(selection);

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

$('#arenaText').text("Pick A Jedi!");
// $('#light').css('border', '1px solid #ffd700');


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
            // $('#lightSaber').play(); 
});

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
            // $('#lightSaber').play(); 
});

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
            // $('#lightSaber').play(); 
});

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
            // $('#lightSaber').play(); 

});

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
            // $('#lightSaber').play(); 
});

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
            // $('#lightSaber').play(); 
});

$('body').on('click', '#fight', function () {
    $('#darkArenaText').text("HP "+characters.vader.hp);
    $('#arenaText').text("");
    $('#arenaText').text("").append("<button id='attack1'>Attack!</button>");
    $('#vader').appendTo("#darkArena");

  });

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

function newgame() {
    location.reload();
}
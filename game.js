$(document).ready(function() {
var winCounter = [];
var lossCounter = [];
var counterAttack = Math.floor((Math.random() * 20) + 1)
var attack = Math.floor((Math.random() * 40) + 10)


let characters = {
    'yoda': {
        name: 'yoda',
        hp: 140,
        // attack: 10,
    },
    'luke': {
        name: 'luke',
        hp: 120,
        // attack: 15,
    },
    'mace': {
        name: 'mace',
        hp: 115,
        // attack: 15,
    },
    'kenobi': {
        name: 'kenobi',
        hp: 130,
        // attack: 14,
    },
    'vader': {
        name: 'vader',
        hp: 130,
        // attack: 25,
    },
    'sidious': {
        name: 'sideous',
        hp: 150,
        // attack: 25,
    },
    'bane': {
        name: 'bane',
        hp: 130,
        // attack: 20,
    },
    'revan': {
        name: 'revan',
        hp: 130,
        // attack: 20,
        }
            }

$('#arenaText').text("Pick A Jedi!");

$('#yoda').click(function() { 
    $('#mace').hide();
    $('#kenobi').hide();
    $('#luke').hide();
        $('#lightArena').text("HP "+characters.yoda.hp);
        $('#arenaText').text("Pick An Opponent!");
            $("#yoda").appendTo("#lightArena");    
});

$('#luke').click(function() { 
    $('#mace').hide();
    $('#yoda').hide();
    $('#kenobi').hide();
        $('#lightArena').text("HP "+characters.luke.hp);
        $('#arenaText').text("Pick An Opponent!");
            $("#luke").appendTo("#lightArena");
});

$('#mace').click(function() { 
    $('#kenobi').hide();
    $('#yoda').hide();
    $('#luke').hide();
        $('#lightArena').text("HP "+characters.mace.hp);
        $('#arenaText').text("Pick An Opponent!");
            $("#mace").appendTo("#lightArena");
});

$('#kenobi').click(function() { 
    $('#mace').hide();
    $('#yoda').hide();
    $('#luke').hide();
        $('#lightArena').text("HP "+characters.kenobi.hp);
        $('#arenaText').text("").append("<button>Click to Fight!</button>");
            $("#kenobi").appendTo("#lightArena");

});

$('#vader').click(function() { 
        $('#darkArena').text("HP "+characters.vader.hp);
        $('#arenaText').text("");
        $('#vader').appendTo("#darkArena");
});

$('#sidious').click(function() { 
    $('#darkArena').text("HP "+characters.sidious.hp);
    $('#arenaText').text("");
    $('#sidious').appendTo("#darkArena");
});

$('#bane').click(function() { 
    $('#darkArena').text("HP "+characters.bane.hp);
    $       ('#arenaText').text("");
    $('#bane').appendTo("#darkArena");
});

$('#revan').click(function() { 
    $('#darkArena').text("HP "+characters.revan.hp);
    $('#arenaText').text("");
    $('#revan').appendTo("#darkArena");
});

});

function newgame() {
    location.reload();
}
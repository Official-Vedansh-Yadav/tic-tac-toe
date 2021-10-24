console.log("Welcome to Tic Tac Toe");

// Intializing variables

// Audio Variables
var music = new Audio("music.mp3");
var turnAudio = new Audio("ting.mp3");
var gameoverAudio = new Audio("gameover.mp3");

// Other Variables
var turn = "X";
 
// Intializing Functions

// Function to change the turn
const changeturn = () => {
    // using conditional ternary opertor to change turn
    return turn === "X" ? "0" : "X";
}

// Function to check win
const checkwin = () => {
    let boxtexts = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // Changing the data of info div if anyone won the match
    wins.forEach( e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "")){
            turn = changeturn();
            document.querySelector('.info').innerText = turn + " won";
            // showing the gif when gameover
            document.querySelector(".imgbox").querySelector('img').style.width = "200px";
            gameoverAudio.play();
        }
    })
}

// Game Logic

// calling the event listner when user click on the box
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn(); // changing the value of turn variable
            turnAudio.play(); // Playing the turn audio
            document.querySelector('.info').innerText = "Turn for " + turn; // changing the innerText of the HTML elements showing whose turn is this
            checkwin(); // calling the function to check win
        }
    });
});

// Add onclick Listner on the reset button
let reset = document.getElementById("reset");
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach( element =>{
        element.innerText = "";
    })

    document.querySelector('.imgbox').querySelector('img').style.width = '0px';
    turn = "X";
    document.querySelector('.info').innerText = "Turn for " + turn;
})
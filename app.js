//my cards
let cards = document.querySelectorAll(".cards");
for(let i = 0; i < cards.length; i++) {
    console.log(cards.length); //answer 20 it's OK
}

let paire = 2;
let score = document.getElementById("points");

//random cards
function shuffleCards() {
    cards.style.backgroundImage = "url(theme[1])";
    cards.random();
}

/**
 * @returns {number}
 */
function random() {
    return Math.trunc(Math.random() * 20);
}

document.querySelector("#newGame").addEventListener("click", startGame);

//start game
function startGame() {
    window.reload();
   initGame();
}

//initialize game (conditions : win/ lose)
function mainGame() {
    for (let card of cards) {}
        //2 different cards


}

mainGame();

//choice theme and reset game
function initGame() {
    let teme = document.getElementById("theme");
    teme.addEventListener("click", function() {
        switch (teme) {


        }

    })

}
initGame();


function finishGame() {
    if(score.innerHTML === "10") {
        alert("Vous avez gagner!");
        initGame();
        startGame();

    }

}



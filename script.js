/*

Consegna
Generare una griglia di gioco quadrata , in cui ogni cella contiene un numero incrementale tra quelli compresi tra 1 e 100
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Bonus
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.


*/

const output = document.getElementById('game');
const playButton = document.getElementById('play-button');
const difficolta = document.getElementById('difficolta');


function generateSquare (difficolta) {
    let gridX;

    if (difficolta === '1') {
        gridX = 10;
    } else if (difficolta === '2'){
        gridX = 9;
    } else if (difficolta === '3'){
        gridX = 7;
    }

    output.style.width = `calc(var(--square) * ${gridX})`;

    for (let i = 1; i <= gridX*gridX; i++){
        const square = document.createElement('div');
        const spanForNumber = document.createElement('span');
        square.append(spanForNumber);
        square.classList.add('square');
        spanForNumber.innerText = `${i}`;
        output.append(square);
    }

}

playButton.addEventListener('click', function(){
    output.innerHTML = '';
    generateSquare(difficolta.value);
})
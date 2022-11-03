//let x = Math.floor((Math.random() * 6) + 1);
//document.getElementById("").innerHTML = x;


const numPlayer = Math.floor((Math.random() * 6) + 1);
const numPC = Math.floor((Math.random() * 6) + 1);

const player = document.getElementById("number-player");
player.innerHTML = `Giocatore: ${numPlayer}`;

const computer = document.getElementById("number-Pc");
computer.innerHTML = `Computer: ${numPC}`;

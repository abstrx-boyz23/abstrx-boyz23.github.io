// <== Suwit Game V.2 ==>

/* Alghoritma :
1. Tangkap pilihan player 
2. Tangkap pilihan computer
3. Buat rules game
4. Tampilkan outputnya
*/

// <== Declare Variable ==>
// Image Computer & Player
const imgComputer = document.getElementById('image-computer');
const imgPlayer = document.getElementById('image-player');
// Rules Suwit Game v.2
let output;
const result = document.getElementById('result');
// Select Player 
let player;
const slcStone = document.getElementsByClassName('select-stone')[0];
const slcScissors = document.getElementsByClassName('select-scissors')[0];
const slcPaper = document.getElementsByClassName('select-paper')[0];

// 1. Stone
slcStone.addEventListener('click', () => {
  player = 'stone';
  console.log('You select stone');
  imgPlayer.src = 'image/stone.jpg';
  setTimeout(function() {
    getResult(player,output);
    imgComputer.src = `image/${computer}.jpg`;
  }, 1000);
});

// 2. Scissors
slcScissors.addEventListener('click', () => {
  player = 'scissors';
  console.log('You select scissors');
  imgPlayer.src = 'image/scissors.jpg';
  setTimeout(function() {
    getResult(player,output);
    imgComputer.src = `image/${computer}.jpg`;
  }, 1000);
});

// 3. Paper
slcPaper.addEventListener('click', () => {
  player = 'paper';
  console.log('You select paper');
  imgPlayer.src = 'image/paper.jpg';
  setTimeout(function() {
    getResult(player,output);
    imgComputer.src = `image/${computer}.jpg`;
  }, 1000);
});

// Select Computer
let computer = Math.random() * 10;
const getComputer = () => {
  if (computer <= 3.33) {
    computer = 'stone';
    console.log('Computer select stone');
  } else if (3.33 < computer && computer <= 6.66) {
    computer = 'scissors';
    console.log('Computer select scissors');
  } else if (6.66 < computer) {
    computer = 'paper';
    console.log('Computer select paper');
  }
}
getComputer();

// Get Result Game Suwit
const getResult = (player,output) => {
  // Rules
  if (player == computer) {
  	output = 'DRAW !!';
  	result.style.color = '#c3ad26';
  } else if (player == 'stone') {
    output = (computer == 'scissors') ? 'YOU WIN !!' : 'COMPUTER WIN !!';
  } else if (player == 'scissors') {
    output = (computer == 'paper') ? 'YOU WIN !!' : 'COMPUTER WIN !!';
  } else if (player == 'paper') {
    output = (computer == 'stone') ? 'YOU WIN !!' : 'COMPUTER WIN !!';
  } 
  result.innerHTML = output;
  if (output == 'YOU WIN !!') {
    result.style.color = '#0bbedb';
  } else if (output == 'COMPUTER WIN !!'){
    result.style.color = '#f60000';
  }
}







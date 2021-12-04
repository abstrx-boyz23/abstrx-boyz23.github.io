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
const imgPlayer   = document.getElementById('image-player');
// Rules Suwit Game v.2
const result      = document.getElementById('result');
// Select Player 
const slcStone    = document.getElementsByClassName('select-stone')[0];
const slcScissors = document.getElementsByClassName('select-scissors')[0];
const slcPaper    = document.getElementsByClassName('select-paper')[0];

// <== Declare Function ==>
// Select Computer
const getComputer = () => {
  const computer  = Math.random() * 10;
  if (computer <= 3.33)                    return 'stone'; // computer <= 3.33
  if (3.33 < computer && computer <= 6.66) return 'scissors'; // 3.33 < computer <= 6.66
  else                                     return 'paper'; // 6.66 < computer
}

// Rules Game
const getResult = (player,computer) => {
  if (player == computer)   return 'DRAW !!';
  if (player == 'stone')    return (computer == 'scissors') ? 'YOU WIN !!' : 'COMPUTER WIN !!';
  if (player == 'scissors') return (computer == 'paper') ? 'YOU WIN !!' : 'COMPUTER WIN !!';
  if (player == 'paper')    return (computer == 'stone') ? 'YOU WIN !!' : 'COMPUTER WIN !!';
}

// Style Color Result Game
const getStyle = (rules) => {
  if (rules == 'DRAW !!')         return result.style.color = '#c3ad26';
  if (rules == 'YOU WIN !!')      return result.style.color = '#0bbedb';
  if (rules == 'COMPUTER WIN !!') return result.style.color = '#f60000';
} 

// 1. Stone
slcStone.addEventListener('click', () => {
  const slcComputer   = getComputer();
  imgPlayer.src       = 'image/stone.jpg';
  
  setTimeout(() => {
    imgComputer.src   = `image/${slcComputer}.jpg`;
    result.innerHTML  = getResult('stone',slcComputer)
    getStyle(getResult('stone',slcComputer));
  }, 1000);
});

// 2. Scissors
slcScissors.addEventListener('click', () => {
  const slcComputer   = getComputer();
  imgPlayer.src       = 'image/scissors.jpg';
  
  setTimeout(() => {
    imgComputer.src   = `image/${slcComputer}.jpg`;
    result.innerHTML  = getResult('scissors',slcComputer)
    getStyle(getResult('scissors',slcComputer));
  }, 1000);
});

// 3. Paper
slcPaper.addEventListener('click', () => {
  const slcComputer   = getComputer();
  imgPlayer.src       = 'image/paper.jpg';
  
  setTimeout(() => {
    imgComputer.src   = `image/${slcComputer}.jpg`;
    result.innerHTML  = getResult('paper',slcComputer)
    getStyle(getResult('paper',slcComputer));
  }, 1000);
});












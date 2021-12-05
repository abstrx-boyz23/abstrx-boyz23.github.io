// <== Suwit Game V.2 ==>

/* Alghoritma :
1. Deklarasikan variabel yg dibutuhkan
    - image computer & player
    - result
    - select player
2. Buat function yg diperlukan
    - Rules game
    - Style color result game
    - Rolling Image Computer*/

// <<<==== 1. Declare Variable ====>>>
// a. Image Computer & Player
const imgComputer = document.getElementById('image-computer');
const imgPlayer   = document.getElementById('image-player');
// b. Result Suwit Game v.2
const result      = document.getElementById('result');
// c. Select Player 
const slcPlayer   = document.querySelectorAll('#selection-of-player img');


// <<<==== Declare Function ====>>>
// a. getResult Game
const getResult   = (player,computer) => {
  if (player == computer)   return 'DRAW !!';
  if (player == 'stone')    return (computer == 'scissors') ? 'YOU WIN !!' : 'COMPUTER WIN !!';
  if (player == 'scissors') return (computer == 'paper') ? 'YOU WIN !!' : 'COMPUTER WIN !!';
  if (player == 'paper')    return (computer == 'stone') ? 'YOU WIN !!' : 'COMPUTER WIN !!';
};
// b. Style Color Result Game
const getStyle = (rules) => {
  if (rules == 'DRAW !!')         return result.style.color = '#c3ad26';
  if (rules == 'YOU WIN !!')      return result.style.color = '#0bbedb';
  if (rules == 'COMPUTER WIN !!') return result.style.color = '#f60000';
};
// c. Rolling Image Computer
const rolling = () => {
  const img = ['stone','scissors','paper'];
  let i = 0;
  const timeStart = new Date().getTime()
  setInterval(() => {
    if (new Date().getTime() - timeStart > 1500) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src',`image/${img[i++]}.jpg`);
    if (i == img.length) i = 0;
  },100)
};

// <<<==== Catch My Selection ====>>>
// a. Select Computer
const getComputer = () => {
  const computer  = Math.random() * 10;
  if (computer <= 3.33)                    return 'stone'; // computer <= 3.33
  if (3.33 < computer && computer <= 6.66) return 'scissors'; // 3.33 < computer <= 6.66
  else                                     return 'paper'; // 6.66 < computer
};
// b. Select Player
slcPlayer.forEach((slc) => {
  slc.addEventListener('click', () => {
    const slcComputer   = getComputer();
    imgPlayer.setAttribute('src',slc.src);
    
    rolling();
    setTimeout(() => {
      imgComputer.setAttribute('src',`image/${slcComputer}.jpg`);
      result.innerHTML  = getResult(slc.alt, slcComputer);
      getStyle(getResult(slc.alt,slcComputer));
    }, 1500);
  });
});


// // 1. Stone
// slcStone.addEventListener('click', () => {
//   const slcComputer   = getComputer();
//   imgPlayer.src       = 'image/stone.jpg';
  
//   setTimeout(() => {
//     imgComputer.src   = `image/${slcComputer}.jpg`;
//     result.innerHTML  = getResult('stone',slcComputer)
//     getStyle(getResult('stone',slcComputer));
//   }, 1000);
// });

// // 2. Scissors
// slcScissors.addEventListener('click', () => {
//   const slcComputer   = getComputer();
//   imgPlayer.src       = 'image/scissors.jpg';
  
//   setTimeout(() => {
//     imgComputer.src   = `image/${slcComputer}.jpg`;
//     result.innerHTML  = getResult('scissors',slcComputer)
//     getStyle(getResult('scissors',slcComputer));
//   }, 1000);
// });

// // 3. Paper
// slcPaper.addEventListener('click', () => {
//   const slcComputer   = getComputer();
//   imgPlayer.src       = 'image/paper.jpg';
  
//   setTimeout(() => {
//     imgComputer.src   = `image/${slcComputer}.jpg`;
//     result.innerHTML  = getResult('paper',slcComputer)
//     getStyle(getResult('paper',slcComputer));
//   }, 1000);
// });












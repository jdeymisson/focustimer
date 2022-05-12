import { 
  buttonPlay,
  buttonStop,
  buttonIncrease,
  buttonDecrease,
  buttonCloud,
  buttonHeat,
  buttonHouse,
  buttonRain,
  buttonsSound,
  buttonDark,
  buttonLight } from './butons.js';

let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');
let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);
let minutesOld = Number(minutesDisplay.textContent);
let timerTimeout;
const body = document.querySelector('body');

function updateDisplayTimer(minutes, seconds) {
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
};

function countdown() {
  timerTimeout = setTimeout(function() {
    if(seconds <= 0) {
      
      seconds = 60;
      
      --minutes;
    }

    --seconds;

    updateDisplayTimer(0, seconds);
  
    countdown();
  }, 1000);

  updateDisplayTimer(minutes, seconds);

  if(seconds <= 0 && minutes <= 0) {
    updateDisplayTimer(minutesOld, 0);
    minutes = minutesOld;
    clearTimeout(timerTimeout)
  }
}

buttonPlay.addEventListener('click', function(){
  let newMinutes = Number(prompt('Informe o tempo: '));

  if(!newMinutes) {
    updateDisplayTimer(minutes, 0);
  } else {
    minutes = newMinutes;
    updateDisplayTimer(newMinutes, 0)
  }

  setTimeout(countdown, 1000);
});

buttonStop.addEventListener('click', function() {
  clearTimeout(timerTimeout);
  updateDisplayTimer(minutesOld, 0);
  minutes = minutesOld;
  seconds = 0;
});

buttonIncrease.addEventListener('click', function(){
  minutes += 5;

  updateDisplayTimer(minutes, 0);
});

buttonDecrease.addEventListener('click', function(){
  if(minutes <= 5) {
    alert('Não foi possível diminuir, caso deseje zerar o relógio, pode clicar em Stop :D')
  } else {  minutes -= 5;}

  updateDisplayTimer(minutes, 0);
});

buttonCloud.addEventListener('click', function() {
  const buttonPress = new Audio('https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view');
  
  buttonsSound.forEach((item, index) => {
    item.classList.remove('active');
  
    item.addEventListener('click', (event) =>{
      event.currentTarget.classList.add('active');
    })
  });

  buttonPress.play();
});

buttonRain.addEventListener('click', function() {
  const buttonPress = new Audio('https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view');


  buttonsSound.forEach((item, index) => {
    item.classList.remove('active');
  
    item.addEventListener('click', (event) =>{
      event.currentTarget.classList.add('active');
    })
  });
  buttonPress.play();
});

buttonHouse.addEventListener('click', function() {
  const buttonPress = new Audio('https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view');

  buttonsSound.forEach((item, index) => {
    item.classList.remove('active');
  
    item.addEventListener('click', (event) =>{
      event.currentTarget.classList.add('active');
    })
  });

  buttonPress.play();
});

buttonHeat.addEventListener('click', function() {
  const buttonPress = new Audio('https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view');

  buttonsSound.forEach((item, index) => {
    item.classList.remove('active');
  
    item.addEventListener('click', (event) =>{
      event.currentTarget.classList.add('active');
    })
  });

  buttonPress.play();
});

buttonLight.addEventListener('click', function() {
  buttonLight.classList.remove('active');
  buttonDark.classList.add('active');

  body.classList.add('dark');
});

buttonDark.addEventListener('click', function() {
  buttonDark.classList.remove('active');
  buttonLight.classList.add('active');

  body.classList.remove('dark');
});
 

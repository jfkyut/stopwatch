const time = document.getElementById('timer');
const playPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');

let seconds = 0;
let minutes = 0;
let hours = 0;

let interval;
let timeStatus = false;

function timer() {
  seconds++;
  if(seconds === 60) {
    seconds = 0;
    minutes++;
    if(minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let sec =  seconds < 10 ? '0' + seconds : seconds;
  let min = minutes < 10 ? '0' + minutes : minutes;
  let hr = hours < 10 ? '0' + hours : hours;

  time.innerText = `${hr}:${min}:${sec}`;
}

function play(){
  interval =  setInterval(timer, 1000);
  playPauseBtn.innerHTML = '<i class="fa fa-pause"></i>';
  timeStatus = true;
}

function pause() {
  interval = clearInterval(interval);
  playPauseBtn.innerHTML = '<i class="fa fa-play"></i>';
  timeStatus = false;
}

playPauseBtn.addEventListener('click', function(){
  if(!timeStatus) {
    play();
  } else {
    pause();
  }
});

resetBtn.addEventListener('click',function(){
  pause();
  time.innerText = `00:00:00`;
  seconds = 0;
  minutes = 0;
  hours = 0;
});
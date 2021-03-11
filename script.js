var clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var pattern = [];
// pattern.length = 6;
let timeLeftCount = document.getElementById("time-left");
let timeLeft = 15;
var progress = 0;
var gamePlaying = false;
var volume = 0.5;
var tonePlaying = false;
var guessCounter = 0;
var strikes = 0;
let reset = 1500;
let gameEnded = false;
const startingTimer = 15;
let audio1 = document.getElementById("Audio1");

function playSound() {
  audio1.play();
}
function countDown() {
  let timer = setInterval(function() {
    if (timeLeft <= 0) {
      timeLeftCount.innerHTML = "0";
      loseGame();
      clearInterval(timer);
    } else if (!gamePlaying) {
      clearInterval(timer);
      timeLeft = 15;
      reset = 1500;
    }
    timeLeftCount.innerHTML = timeLeft;
    timeLeft -= 1;
  }, reset);
  timeLeft = 15;
  reset = 1500;
  timeLeftCount.innerHTML = 15;
}

function randomPattern() {
  console.log("ADDING PATTERNS");
  for (let i = 0; i < 6; i += 1) {
    pattern.push(Math.floor(Math.random() * 6 + 1));
  }
}

function startGame() {
  clueHoldTime = 1000;
  strikes = 0;
  gameEnded = false;
  randomPattern();
  console.log(pattern);
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  countDown();
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  timeLeft = 15;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  pattern = [];
}

const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 650.5,
  6: 600.2
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
    clueHoldTime = clueHoldTime - 30;
    timeLeft = startingTimer - i;
    reset -= 100;
  }
}

function loseGame() {
  gameEnded = true;
  stopGame();
  alert("Game Over. You lost.");
}

function winGame() {
  stopGame();
  alert("Game over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);

  if (!gamePlaying) {
    return;
  }

  if (pattern[guessCounter] == btn) {
    //Guess was correct!
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        console.log("YOU WIN!");
        winGame();
      } else {
        //Pattern correct. Add next segment
        progress += 1;
        playClueSequence();
      }
    } else {
      guessCounter += 1;
    }
  } else {
    strikes += 1;
    if (strikes >= 3) {
      loseGame();
    } else {
      playClueSequence();
    }
  }
}
//Page Initialization
// Init Sound Synthesizer

var context = new AudioContext();
context.resume();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);

// document.querySelector('startBtn').addEventListener('click', function() {
//   context.resume().then(() => {
//     console.log('Playback resumed successfully');
//   });
// });


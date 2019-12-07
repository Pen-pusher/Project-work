// Game rule:

// the game has 2 player playing in round
// iN EACH TURN , a player rolls a dice as many times as he wishes . Each time reult gets added to his round score.
// BUt if the player rolls one ,all his round score gets lost .After that ,its the next player turn
// the player van choose to "hold",ehich means that his round score gets added to his global score .after that its the next player turn
// the first player to reach 100 points on GLOBAL score wins the game.

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice)

// document.querySelector("#current-" + activePlayer).textContent = dice;
// document.querySelector("#current-" + activePlayer).innerHTML = '<em>' + dice + '</em>';

var x = document.querySelector("#score-" + roundScore).textContent;
console.log(x);

document.querySelector(".dice").style.display = "none";

document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

document.querySelector(".btn-roll").addEventListener("click", function () {
  //    random numbe generate
  var dice = Math.floor(Math.random() * 6) + 1;
  //   display the result
  var diceDom = document.querySelector(".dice");
  diceDom.style.display = "block";
  diceDom.src = "dice-" + dice + ".gif";
  // updating the score if the value is not 1

  if (dice !== 1) {
    // add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    // next player
    nextPlayer();
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  // add current score to global score
  scores[activePlayer] += roundScore;
  // scores[activePlayer] =scores[activePlayer] + roundScore;

  // update the ui
  document.querySelector("#score-" + activePlayer).textContent =
    scores[activePlayer];

  // check if player won the game
  if (scores[activePlayer] >= 6) {
    document.querySelector("#name-" + activePlayer).textContent = "WINNER";
    document.querySelector(".dice").style.display = "none";
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active')

  } else {
    // Next player
    nextPlayer();
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  document.querySelector(".dice").style.display = "none";
}

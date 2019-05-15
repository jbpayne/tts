const hands = ['rock', 'paper', 'scissors'];
const [r,p,s] = hands;

const player1 = {
  name: "Player 1",
  getHand(array) { return array[(parseInt(Math.random()*10)%3)]; }
}

const player2 = {
  name: "Player 2",
  getHand(array) { return array[(parseInt(Math.random()*10)%3)]; }
}

const playRound = (obj1, obj2) => {
  const winner = {};
  const p1 = winner.p1 = obj1.getHand(hands);
  const p2 = winner.p2 = obj2.getHand(hands);
  console.log(`Hands played:\n${obj1.name}: ${p1}\n${obj2.name}: ${p2}`)
  p1 === p2 ? console.log("It's a tie.") :
  p1 === r && p2 === s ? console.log((winner.name = obj1.name) + " wins!") :
  p1 === p && p2 === r ? console.log((winner.name = obj1.name) + " wins!") :
  p1 === s && p2 === p ? console.log((winner.name = obj1.name) + " wins!") :
  console.log(`\n${(winner.name = obj2.name)} wins!\n`);
  return winner.name ? winner : null;
}

const playGame = (player1,player2,playUntil) => {
  const rounds = [0, 0];
  let round = 1;
  while (!rounds.includes(3)) {
    console.log(`Round ${round++}:\n`);
    const winner = (playRound(player1,player2));
    winner === null ? null : 
    winner === player1.name ? rounds[0]++ : 
    rounds[1]++ ;
    console.log(`Score:\nPlayer 1: ${rounds[0]} Player 2: ${rounds[1]}\n`);
  }
    rounds[0] === 3 ? console.log("Player 1 wins the game!") :
    console.log("Player 2 wins the game!");
}

playGame(player1,player2,5);
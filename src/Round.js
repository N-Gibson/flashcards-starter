const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentTurn = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.cards[this.currentTurn];
  }

  takeTurn(userGuess) {
    let turn = new Turn(userGuess, this.deck.cards[this.currentTurn]);
    
    turn.evaluateGuess() ? null : this.incorrectGuesses.push(this.deck.cards[this.currentTurn].id);
    
    this.currentTurn++;

    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    let remainder =  Math.round(this.incorrectGuesses.length / this.deck.cards.length * 100)

    return 100 - remainder; 
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`)
  }
}

module.exports = Round;
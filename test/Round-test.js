const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Round', () => {

  let card1, card2, card3, deck, round;

  beforeEach(() => {
   card1 = new Card({
    id : 5,
    question : 'What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?',
    answers : ['mutator method', 'accessor method', 'iteration method'],
    correctAnswer : 'iteration method'
  });

   card2 = new Card({
    id : 6,
    question : 'What is an example of a mutator method?',
    answers : ['sort()', 'map()', 'join()'],
    correctAnswer : 'sort()'
  });

   card3 = new Card({
    id : 7,
    question : 'Which array prototype is not an accessor method?',
    answers: ['join()', 'slice()', 'splice()'],
    correctAnswer : 'splice()'
  });
  
  deck = new Deck([card1, card2, card3]);

  round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  })

  it('should return the current card being played', () => {
    expect(round.returnCurrentCard()).to.equal(deck.cards[0]);
  });

  it('should be able to take a turn', () => {
    round.takeTurn();
    round.takeTurn();

    expect(round.currentTurn).to.equal(2);
  });

  it('should add an incorrect guess to the list', () => {
    round.takeTurn('anAnswer');
    round.takeTurn('anotherAnswer');
    round.takeTurn('splice()');

    expect(round.incorrectGuesses.length).to.equal(2);
  });

  it('should move to the next card in the deck', () => {
    round.takeTurn('anAnswer');

    expect(round.returnCurrentCard()).to.equal(deck.cards[1]);

    round.takeTurn('splice ()');

    expect(round.returnCurrentCard()).to.equal(deck.cards[2]);
  });

  it('should give feedback if the guess is correct or not', () => {

    expect(round.takeTurn('iteration method')).to.equal('Correct!')

    expect(round.takeTurn('anAnswer')).to.equal('Incorrect!')
  });

  it('should calculate the percent correct', () => {

    round.takeTurn('iteration method');
    round.takeTurn('wrong answer');
    round.takeTurn('splice()');
    
    round.calculatePercentCorrect();

    expect(round.calculatePercentCorrect()).to.equal(67)
  });

  it('should print an end game message', () => {

    round.takeTurn('iteration method');
    round.takeTurn('wrong answer');
    round.takeTurn('splice()');
    
    round.calculatePercentCorrect();

    round.endRound();
  })
});
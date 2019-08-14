const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Game = require('../src/Game');

describe('Game', () => {

  let card1, card2, card3, deck, round, game;

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
  game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function');
  })
});

const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', () => {

  let card1, card2, card3, deck;

  beforeEach(() => {
  card1 = new Card({
    id : 2,
    question : 'What is a comma-separated list of related values?',
    answers : ['array', 'object', 'function'],
    correctAnswer : 'array'
  });

  card2 = new Card({
    id : 3,
    question : 'What type of prototype method directly modifies the existing array?',
    answers : ['mutator method', 'accessor method', 'iteration method'],
    correctAnswer : 'mutator method'
  });

  card3 = new Card({
    "id": 4,
    "question": "What type of prototype method does not modify the existing array but returns a particular representation of the array?",
    "answers": ["mutator method", "accessor method", "iteration method"],
    "correctAnswer": "accessor method"
  });

  deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', () => {
    expect(Deck).to.be.a('function');
  });

  it('should be able to count the deck', () => {
    expect(deck.countCards()).to.equal(3)
  });
});
const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {

  let card, turn;

  beforeEach(() => {
   card = new Card({
    id : 1, question: 'What is Robbie\'s favorite animal', answers: ['sea otter', 'pug', 'capybara'], correctAnswer: 'sea otter'
  });

    turn = new Turn('userGuess', card);
    turn1 = new Turn('sea otter', card);
    turn2 = new Turn('wrongGuess', card);
})
  
  it('should be a function', () => {
   
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should expect a guess', () => {

    expect(turn.guess).to.equal('userGuess');
  });

  it('should expect a card', () => {

    expect(turn.card).to.equal(card);
  });

  it('should return the guess', () => {

    expect(turn.returnGuess()).to.equal('userGuess')
  });

  it('should return the card', () => {

    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate where the answer is correct or not', () => {

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should give feedback', () => {

    expect(turn1.giveFeedback()).to.equal('Correct!');
    expect(turn2.giveFeedback()).to.equal('Incorrect!');
  })
});
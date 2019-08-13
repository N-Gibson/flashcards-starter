const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  
  it('should be a function', () => {
    const turn = new Turn();

    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', () => {
    const turn = new Turn();

    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should expect a guess', () => {
    const turn = new Turn('userGuess');

    expect(turn.guess).to.equal('userGuess');
  });

  it('should expect a card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('userGuess', card);

    expect(turn.card).to.equal(card);
  });

  it('should return the guess', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('userGuess', card);

    expect(turn.returnGuess()).to.equal('userGuess')
  });

  it('should return the card', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn = new Turn('userGuess', card);

    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate where the answer is correct or not', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('sea otter', card);
    const turn2 = new Turn('wrongGuess', card)

    expect(turn1.evaluateGuess()).to.equal(true);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should give feedback', () => {
    const card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const turn1 = new Turn('sea otter', card);
    const turn2 = new Turn('wrongGuess', card)

    expect(turn1.giveFeedback()).to.equal('Correct!');
    expect(turn2.giveFeedback()).to.equal('Incorrect!');
  })
});
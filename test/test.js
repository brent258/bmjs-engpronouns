const expect = require('chai').expect;
const obj = require('../index');

describe('Pronouns', () => {

  it('should return the right active pronoun', () => {
    let result = obj.active("I");
    expect(result).to.be.a('string');
    expect(result).to.equal('I');
    expect(result).to.not.be.undefined;
  });

  it('should return the right passive pronoun', () => {
    let result = obj.passive("I");
    expect(result).to.be.a('string');
    expect(result).to.equal('me');
    expect(result).to.not.be.undefined;
  });

  it('should return the right reflex pronoun', () => {
    let result = obj.reflex("I");
    expect(result).to.be.a('string');
    expect(result).to.equal('myself');
    expect(result).to.not.be.undefined;
  });

  it('should return the right possessive pronoun', () => {
    let result = obj.possessive("I");
    expect(result).to.be.a('string');
    expect(result).to.equal('mine');
    expect(result).to.not.be.undefined;
  });

  it('should return the right article pronoun', () => {
    let result = obj.article("I");
    expect(result).to.be.a('string');
    expect(result).to.equal('my');
    expect(result).to.not.be.undefined;
  });

  it('should return nothing without a string', () => {
    let result = obj.active();
    expect(result).to.be.undefined;
  });

});

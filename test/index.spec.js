import str from '../src/index.js';
import { expect } from 'chai';

describe('test is Hello World', () => {
  it('is Hello World?', () => {
    expect(str).to.be.equal('Hello World');
  });

  it('"Hello World"\'s length is 11', () => {
    expect(str.length).to.be.equal(11);
  });
});
var assert = require('chai').assert;
var isPrime = require('../memoization');

describe('Memoization', function () {
  it('Function invoked as usual', function () {
    assert(isPrime(17), "17 is prime");
  });
});
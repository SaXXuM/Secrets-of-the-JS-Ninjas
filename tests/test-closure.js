var assert = require('chai').assert;

var outerValue = 'ninja';
var later;


describe('Closure', function() {
  it('Closure works', function() {
    function outerFunction() {
      var innerValue = 'samurai';

      function innerFunction() {
        assert(outerValue, 'I can see the ninja');
        assert(innerValue, 'I can see the samurai');
      }

      later = innerFunction;
    }

    outerFunction();
    later();
  })
});


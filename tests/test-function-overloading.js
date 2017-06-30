var assert = require('chai').assert;
var addMethod = require('../function-overloading');

var ninjas = {
  values: ['Dean Edwards', 'Sam Stephenson', 'Alex Russel']
};

before(function () {
  addMethod(ninjas, 'find', function () {
    return this.values;
  });

  addMethod(ninjas, 'find', function (name) {
    var ret = [];
    for (var i = 0; i < this.values.length; i++)
      if (this.values[i].indexOf(name) !== -1)
        ret.push(this.values[i]);
    return ret;
  });

  addMethod(ninjas, 'find', function (first, last) {
    var ret = [];
    for (var i = 0; i < this.values.length; i++)
      if (this.values[i] === (first + ' ' + last))
        ret.push(this.values[i]);
    return ret;
  });

});

describe('Function overloading', function () {
  it('Return all elements of array', function () {
    assert(ninjas.find().length === 3, "Found all ninjas");
  });

  it('Return elements containing string', function () {
    assert(ninjas.find('Edwards').length === 1, 'Found ninjas by string');
  });

  it('Return elements with equal name and last name', function () {
    assert(ninjas.find('Alex', 'Russel').length === 1, 'Found ninjas by string');
  });

});
var unit = require('../src/unit')
var expect = require('../node_modules/chai/chai').expect;

describe('Inline Function Test', function () {

  it('Inline function should return hello', function () {
    var hello = function (){
      return 'Hello World';
      };
    var text = hello();
    expect(text).to.equal('Hello World');
  });
});

describe('Unit Function Test', function () {

  it('Unit function should return hello', function () {
    var text = unit.hello();
    expect(text).to.equal('Hello World');
  });
});

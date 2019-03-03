var assert = require('assert');
var calc = require('../app/calc.js');
// Tests are hierarchical. Here we define a test suite for our calculator.
describe('Calculator Tests', function() {
// And then we describe our test cases.
it('returns 1 + 1 = 2', function(done) {
assert.equal(calc.add(1, 1), 2);
// Invoke done when the test is complete.
done();
});
it('returns 2 * 2 = 4', function(done) {
assert.equal(calc.mul(2, 2), 4);
// Invoke done when the test is complete.
done();
});
it('returns 9 * 9 = 81', function(done) {
assert.equal(calc.mul(9, 9), 81);
// Invoke done when the test is complete.
done();
});

it('returns 6 + (-1) = 5', function(done) {
assert.equal(calc.add(6, -1), 5);
// Invoke done when the test is complete.
done();
});
});
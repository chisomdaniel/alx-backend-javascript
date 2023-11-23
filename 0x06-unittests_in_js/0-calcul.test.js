const assert = require('assert');
const calculateNumber = require('./0-calcul');


it('should return 3', function () {
    assert.equal(calculateNumber(1, 2), 3);
})

it('should return 3', function () {
        assert.equal(calculateNumber(1.3, 2.1), 3);
})

it('should return 5', function () {
    assert.equal(calculateNumber(1.8, 2.9), 5);
})

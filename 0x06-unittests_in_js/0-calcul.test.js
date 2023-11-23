const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('add numbers', function () {
    describe('correct output', function () {
        it('should return 3', function () {
            assert.equal(calculateNumber(1, 2), 3);
        })
    })
    describe('correct output', function () {
        it('should return 3', function () {
            assert.equal(calculateNumber(1.3, 2.1), 3);
        })
    })
    describe('correct output', function () {
        it('should return 5', function () {
            assert.equal(calculateNumber(1.8, 2.9), 5);
        })
    })
    describe('correct output', function () {
        it('should return 13', function () {
            assert.equal(calculateNumber(6, 7), 13);
        })
    })
    describe('correct output', function () {
        it('should return 13', function () {
            assert.equal(calculateNumber(11, 2), 13);
        })
    })
    describe('correct output', function () {
        it('should return 15', function () {
            assert.equal(calculateNumber(13.2, 2), 15);
        })
    })
    describe('correct output', function () {
        it('should return 9', function () {
            assert.equal(calculateNumber(6.6, 2), 9);
        })
    })
    describe('correct output', function () {
        it('should return 5', function () {
            assert.equal(calculateNumber(5, 0), 5);
        })
    })
    describe('correct output', function () {
        it('should return 0', function () {
            assert.equal(calculateNumber(0, 0), 0);
        })
    })
})

describe('incorrect output', function () {
    describe('with letter', function () {
        it('should return NaN', function () {
            assert.equal(calculateNumber(1, 'a'), NaN);
        })
    })
    describe('two letters', function () {
        it('should return NaN', function () {
            assert.equal(calculateNumber('b', 'a'), NaN);
        })
    })
})

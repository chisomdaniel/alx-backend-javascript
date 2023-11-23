const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('add numbers', function () {
    describe('correct output', function () {
        it('should return 3', function () {
            assert.equal(calculateNumber('SUM', 1, 2), 3);
        })
    })
    describe('correct output', function () {
        it('should return 3', function () {
            assert.equal(calculateNumber('SUM', 1.3, 2.1), 3);
        })
    })
    describe('correct output', function () {
        it('should return 5', function () {
            assert.equal(calculateNumber('SUM', 1.8, 2.9), 5);
        })
    })
    describe('correct output', function () {
        it('should return 13', function () {
            assert.equal(calculateNumber('SUM', 6, 7), 13);
        })
    })
    describe('correct output', function () {
        it('should return 13', function () {
            assert.equal(calculateNumber('SUM', 11, 2), 13);
        })
    })
    describe('correct output', function () {
        it('should return 15', function () {
            assert.equal(calculateNumber('SUM', 13.2, 2), 15);
        })
    })
    describe('correct output', function () {
        it('should return 9', function () {
            assert.equal(calculateNumber('SUM', 6.6, 2), 9);
        })
    })
    describe('correct output', function () {
        it('should return 5', function () {
            assert.equal(calculateNumber('SUM', 5, 0), 5);
        })
    })
    describe('correct output', function () {
        it('should return 0', function () {
            assert.equal(calculateNumber('SUM', 0, 0), 0);
        })
    })
    describe('SUBTRACT', function () {
        it('should return 4', function () {
            assert.equal(calculateNumber('SUBTRACT', 5, 1), 4);
        })
    })
    describe('Subtract with negative value', function () {
        it('should return 10', function () {
            assert.equal(calculateNumber('SUBTRACT', 9, -1), 10);
        })
    })
    describe('subtract', function () {
        it('should return 3', function () {
            assert.equal(calculateNumber('SUBTRACT', 32, 0), 32);
        })
    })
    describe('subtract', function () {
        it('should return 0', function () {
            assert.equal(calculateNumber('SUBTRACT', 0, 0), 0);
        })
    })
    describe('divide', function () {
        it('should return 2', function () {
            assert.equal(calculateNumber('DIVIDE', 6, 3), 2);
        })
    })
    describe('divide', function () {
        it('should return 5', function () {
            assert.equal(calculateNumber('DIVIDE', 9.7, 2), 5);
        })
    })
    describe('divide', function () {
        it('should return 0', function () {
            assert.equal(calculateNumber('DIVIDE', 3, 0), 'Error');
        })
    })
})

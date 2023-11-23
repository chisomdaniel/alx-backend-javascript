const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');


describe('add numbers', function () {
    describe('correct output', function () {
        it('should return 3', function () {
            expect(calculateNumber('SUM', 1, 2)).to.equal(3);
        })
    })
    describe('correct output', function () {
        it('should return 3', function () {
            expect(calculateNumber('SUM', 1.3, 2.1)).to.equal(3);
        })
    })
    describe('correct output', function () {
        it('should return 5', function () {
            expect(calculateNumber('SUM', 1.8, 2.9)).to.equal(5);
        })
    })
    describe('correct output', function () {
        it('should return 13', function () {
            expect(calculateNumber('SUM', 6, 7)).to.equal(13);
        })
    })
    describe('correct output', function () {
        it('should return 13', function () {
            expect(calculateNumber('SUM', 11, 2)).to.equal(13);
        })
    })
    describe('correct output', function () {
        it('should return 15', function () {
            expect(calculateNumber('SUM', 13.2, 2)).to.equal(15);
        })
    })
    describe('correct output', function () {
        it('should return 9', function () {
            expect(calculateNumber('SUM', 6.6, 2)).to.equal(9);
        })
    })
    describe('correct output', function () {
        it('should return 5', function () {
            expect(calculateNumber('SUM', 5, 0)).to.equal(5);
        })
    })
    describe('correct output', function () {
        it('should return 0', function () {
            expect(calculateNumber('SUM', 0, 0)).to.equal(0);
        })
    })
    describe('SUBTRACT', function () {
        it('should return 4', function () {
            expect(calculateNumber('SUBTRACT', 5, 1)).to.equal(4);
        })
    })
    describe('Subtract with negative value', function () {
        it('should return 10', function () {
            expect(calculateNumber('SUBTRACT', 9, -1)).to.equal(10);
        })
    })
    describe('subtract', function () {
        it('should return 3', function () {
            expect(calculateNumber('SUBTRACT', 32, 0)).to.equal(32);
        })
    })
    describe('subtract', function () {
        it('should return 0', function () {
            expect(calculateNumber('SUBTRACT', 0, 0)).to.equal(0);
        })
    })
    describe('divide', function () {
        it('should return 2', function () {
            expect(calculateNumber('DIVIDE', 6, 3)).to.equal(2);
        })
    })
    describe('divide', function () {
        it('should return 5', function () {
            expect(calculateNumber('DIVIDE', 9.7, 2)).to.equal(5);
        })
    })
    describe('divide', function () {
        it('should return 0', function () {
            expect(calculateNumber('DIVIDE', 3, 0)).to.equal('Error');
        })
    })
})

const sinon = require("sinon");
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require("./utils");
const chai = require('chai');
const expect = chai.expect;


describe('sendPaymentRequestToApi:', function () {
    describe('function was called', function () {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10)
        sinon.spy(console, 'log')
        sendPaymentRequestToApi(100, 20)

        afterEach(function () {
            calculateNumberStub.restore();
        })

        it('should use a function', function () {
            expect(calculateNumberStub.calledOnce).to.be.true;
        })
        it('called with specific args', function () {
            expect(calculateNumberStub.calledWith(type='SUM', a=100, b=20)).to.be.true;
        })
        it('prints the right output', function () {
            expect(console.log.calledWith('The total is: 10')).to.be.true
        })
    })
})

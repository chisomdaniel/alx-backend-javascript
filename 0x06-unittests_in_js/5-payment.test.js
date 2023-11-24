const sinon = require("sinon");
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require("./utils");
const chai = require('chai');
const expect = chai.expect;


describe('Hooks', function() {
    describe('use one spy', function() {
        beforeEach(function () {
            sinon.spy(console, 'log');
        })
        afterEach(function () {
            console.log.restore();
        })
        it('print the right statement, 1', function () {
            sendPaymentRequestToApi(100, 20)
            expect(console.log.calledWith('The total is: 120')).to.be.true
        })
        it('print the right statement, 2', function () {
            sendPaymentRequestToApi(10, 10)
            expect(console.log.calledWith('The total is: 20')).to.be.true
        })
    })
})

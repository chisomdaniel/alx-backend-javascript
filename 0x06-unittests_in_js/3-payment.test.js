const sinon = require("sinon");
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require("./utils");
const chai = require('chai');
const expect = chai.expect;


describe('sendPaymentRequestToApi:', function () {
    describe('function was called', function () {
        it('should use a function', function () {
            sinon.spy(Utils, 'calculateNumber')
            sendPaymentRequestToApi(100, 20)
            expect(Utils.calculateNumber.calledOnce).to.be.true;
        })
    })
})

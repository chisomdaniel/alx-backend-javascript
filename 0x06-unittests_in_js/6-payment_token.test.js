const getPaymentTokenFromAPI = require('./6-payment_token')
const chai = require('chai');
const expect = chai.expect;

describe('dealing with async and promises', function() {
    it('should get a promise', function (done) {
        this.timeout(10000)
        getPaymentTokenFromAPI(true).then(function (out) {
            expect(out).to.equal({data: 'Successful response from the API' })
        })
        done()
    })
})

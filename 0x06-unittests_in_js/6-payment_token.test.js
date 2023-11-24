const getPaymentTokenFromAPI = require('./6-payment_token')
const chai = require('chai');
const expect = chai.expect;

describe('dealing with async and promises', function() {
    it('should get a promise', function (done) {
        getPaymentTokenFromAPI(true).then( ({data})=> {
            expect(data).to.equal('Successful response from the API')
            done()
        })
    })
    it('no output', function(){
        expect(getPaymentTokenFromAPI()).to.be.an('undefined')
    })
})

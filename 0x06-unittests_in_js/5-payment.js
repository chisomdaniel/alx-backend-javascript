const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
    const sum = Utils.calculateNumber('SUM', a=totalAmount, b=totalShipping)
    console.log(`The total is: ${sum}`)
}

module.exports = sendPaymentRequestToApi

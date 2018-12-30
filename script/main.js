const request = require('request');

const add = (input, b) => {
    const info = {
        input
    }
    // info.input = {}
    // Object.assign(info.input, a)
    info.sumString = '';
    info.sum = 0;


    for (let i = 0; i < b.length; i++) {
        info.sumString += `+${b[i]}`
        let value = info.sum + parseInt(b[i]);
        info.sum = value
        parseInt(info.sumString)
    }



    return info
}

function multiply(input, b) {
    const info = {
        input
    }
    // info.input = {}
    // Object.assign(info.input, a)
    info.productString = '';
    info.product = 1;


    for (let i = 0; i < b.length; i++) {
        info.productString += `*${b[i]}`
        let multiply = info.product * parseInt(b[i]);
        info.product = multiply
        parseInt(info.productString)
    }



    return info
}


const search = (a, cb) => {

    const api_key = 'siIyo4w5mg0REENX76Sr57QTgkt3BWvY';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${a}`;

    request(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const info = JSON.parse(body)
            console.log('response successful')
             cb(info)
        }
    })
    console.log('############')

}


module.exports = {
    add,
    multiply,
    search,
}
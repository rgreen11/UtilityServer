 const math = require('./script/main.js')

const express = require('express');
// OR it can be written as const app = require('express')()

const app = express();
const port = 3000;


app.get('/math/add', (request, response) => {
    const obj = request.query
    const value = Object.values(request.query)
    
    response.send(200 , math.add(obj, value))
    // const result = math.add(a,b);
    // res.status(status).send(body)
    // response.send(200, result)
    
});


app.get('/math/multiply', (request, response) => {
    const obj = request.query
    const value = Object.values(request.query)
    
    response.send(200 , math.multiply(obj, value))
    // const result = math.add(a,b);
    // res.status(status).send(body)
    // response.send(200, result)
    
});

app.get('/gif', (request, response) => {

     const obj = request.query
    const value = Object.values(obj)

        
      const gifArr = [];
        // const url_image = response.json(url);
        math.search(value, (cb)=>{
            cb.data.forEach(currentGif=>{
                const url = currentGif.images.original.url
                gifArr.push(url)
            })
            response.send(gifArr)
        })
        
        // math.search()

    // console.log(response.send(200, math.search(value)))
        
    
});



app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
});
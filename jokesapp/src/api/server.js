// loads the express package 
const express = require('express')


// creates instance of express & defines port
const app = express()
const port = 4001 


// creates our routes and handles our routes 
app.get('/', (req, res) => {
    console.log(req)
    res.send('Hello BeyondMD!')
})


// listens for request 
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
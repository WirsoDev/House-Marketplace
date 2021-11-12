const express = require('express')
const app = express()


app.get('/', (rep, res)=>{
    res.json({
        "status":"Hello World"
    })
})


// Server connection
let port = 3000
app.listen(process.env.PORT || port, ()=>{console.log('Server up at port - ' + port)})

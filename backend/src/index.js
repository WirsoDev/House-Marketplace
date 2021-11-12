const express = require('express')
const app = express()
const db = require('./db/db')


// server config
app.use(express.json())


// get data
app.get('/all', (req, res) => {

    // select all itens from db
    db.all(`SELECT * FROM properties`, function(err, rows){
        if(err){
            console.log(err)
            return res.send('404')
        }
        console.log(rows)
        return res.send('Send!')
    })
})




// Server connection
let port = 3000
app.listen(process.env.PORT || port, () => { console.log('Server up at port - ' + port) })

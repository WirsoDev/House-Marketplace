const express = require('express')
const app = express()
const db = require('./db/db')


// server config
app.use(express.json())


app.get('/all', (req, res) => {
    // select all itens from db.properties

    db.all(`SELECT * FROM properties`, function(err, rows){

        if(err){
            console.log(err)
            return res.status('404').send('Something go wrong!')
        }

        let data = rows
        console.log(rows)
        return res.json(data)
    })
})




// Server connection
let port = 3000
app.listen(process.env.PORT || port, () => { console.log('Server up at port - ' + port) })

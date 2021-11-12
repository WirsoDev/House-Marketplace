const express = require('express')
const app = express()
const db = require('./db/db')


// server config
app.use(express.json())


app.get('/all', (req, res) => {
    // select all itens from db.properties

    db.all(`SELECT * FROM properties`, function (err, rows) {
        if (err) {
            console.log(err)
            return res.status('404').send('Something go wrong!')
        }
        let data = rows
        console.log(rows)
        return res.json(data)
    })
})


app.post('/add', (req, res) => {
    // add values to db
    var data = req.body
    if (data) {
        const query = `INSERT INTO properties(name, units, img)
        VALUES(?,?,?);`
        const values = [data.name, data.units, data.img]
        db.run(query, values, function(err){
            if(err){
                console.log(err)
                return res.status(404).send('not able to register data')
            }
            return res.send('Data successfully registered')
        })
    }
})


app.delete('/del/:id', (req, res)=>{
    // delete item from db
    let id = parseInt(req.params.id)
    console.log(typeof id)
    if(id){
        db.run(`DELETE FROM properties WHERE id= ?`,[id],function(err){
            if(err){
                console.log(err)
                return res.status(404).send('Something go wrong!')
            }
            console.log('Item removed')
            return res.send('Item Removed')
        })
    }
    //return res.status(404).send('Something go wrong!')
})


app.put('/update/:id', (req, res)=>{
    // Update item in db

    let id = req.params.id

    if(id){

    }
    
})


// Server connection
let port = 3000
app.listen(process.env.PORT || port, () => { console.log('Server up at port - ' + port) })

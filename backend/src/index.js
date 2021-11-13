import Express from 'express'
const app = Express()

import { openDb } from './db.js'
import { allProperties, addPropertie } from './db/models/properties.js'

// server config
app.use(Express.json())


// Routes

app.get('/', (req, res) => {
    //ping
    res.json({
        "message": "live",
    })
})


app.get('/all', async function (req, res) {
    // Get all properties from db
    let properties = await allProperties()
    res.json({
        properties
    })
})


app.post('/add', (req, res) => {
    //add properties to db
    let data = req.body
    console.log(data)
    addPropertie(data)
    res.json({
        "message": "Propertie added"
    })
})


/*
app.get('/all', (req, res) => {
    // select all itens from db.properties
    const data = queryAll('hello')
    //console.log(queryAll('hello'))
    if(data){
        return res.send(data)
    }
    return res.status(404).send('Something go wrong!')
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
    let data = req.body
    console.log(data)

    if(id){
        let query = `UPDATE properties SET name=?, units>=? WHERE id=?`
        let values = [data.name, data.units, id]
        db.run(query, values, function(err){
            console.log(err)
            return res.status(404).send('NO')
        })
        return res.send('Values updated')
    }
})
*/


// Server connection
let port = 3000
app.listen(process.env.PORT || port, () => { console.log('Server up at port - ' + port) })

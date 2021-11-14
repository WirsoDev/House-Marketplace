import Express from 'express'
const app = Express()
//import { openDb } from './db.js'
import { allProperties, addPropertie, updatePropertie, deletePropertie } from './db/models/properties.js'

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
    if(properties){
        return res.json({
            properties
        })
    }
    return res.status(404).json(
        {
            "message": "404"
        }
    )
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


app.put('/update', (req, res)=>{
    //update properties
    let data = req.body
    console.log(data)
    updatePropertie(data)
    res.json({
        "message": "Propertie updated"
    })
})


app.delete('/delete', (req, res)=>{
    //Delete properties
    let data = req.body
    console.log(data)
    deletePropertie(data)
    res.json({
        "message": "Propertie Deleted"
    })
})



// Server connection
let port = 3000
app.listen(process.env.PORT || port, () => { console.log('Server up at port - ' + port) })

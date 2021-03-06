import Express from 'express'
const app = Express()
import cors from 'cors'
import { allProperties, addPropertie, updatePropertie, deletePropertie, PropertiesByUnit } from './db/models/properties.js'


// server config
app.use(Express.json())
app.use(cors())


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
    if (properties) {
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
    addPropertie(data)
    res.json({
        "message": "Propertie added"
    })
})


app.put('/update', (req, res) => {
    //update properties
    let data = req.body
    updatePropertie(data)
    res.json({
        "message": "Propertie updated"
    })
})


app.delete('/delete', (req, res) => {
    //Delete properties
    let data = req.body
    deletePropertie(data)
    res.json({
        "message": "Propertie Deleted"
    })
})


app.post('/byroom', async function (req, res) {
    // Get all properties by room from db
    var data = req.body
    let properties = await PropertiesByUnit(data)
    if (properties) {
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


// Server connection
let port = 3000
app.listen(process.env.PORT || port, () => { console.log('Server up at port - ' + port) })

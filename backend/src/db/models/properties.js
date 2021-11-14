import { openDb } from "../../db.js";


export async function allProperties() {
    //get all properties
    try {
        return openDb().then(db => {
            return db.all('SELECT * FROM properties').then(res => res)
        })
    } catch (err) {
        console.log(err)
        return null
    }
}


export async function PropertiesByUnit(data) {
    //get by number off rooms
    try {
        return openDb().then(db => {
            return db.all('SELECT * FROM properties WHERE units LIKE ?', [`%${data.units}%`]).then(res => res)
        })
    } catch (err) {
        console.log(err)
        return null
    }
}


export async function addPropertie(data) {
    // add properties
    try {
        openDb().then(db => {
            db.run(
                `INSERT INTO properties (name, units)
                 VALUES(?,?)
                `,
                [data.name, data.units]
            )
        })
    } catch (err) {
        console.log(err)
    }
}


export async function updatePropertie(data) {
    // update properties
    try {
        openDb().then(db => {
            db.run(`UPDATE properties SET name=?, units=? WHERE ID=?`, [data.name, data.units, data.id])
        })
    } catch (err) {
        console.log(err)
    }
}


export async function deletePropertie(data) {
    // delete properties
    try {
        openDb().then(db => {
            db.run(`DELETE FROM properties WHERE ID=?`, [data.id])
        })
    } catch (err) {
        console.log(err)
    }
}



import { openDb } from "../../db.js";


export async function allProperties() {
    //get all properties
    return openDb().then(db => {
        return db.all('SELECT * FROM properties')
            .then(res => res)
    })
}


export async function addPropertie(data) {
    // add properties
    openDb().then(db => {
        db.run(
            `INSERT INTO properties (name, units)
             VALUES(?,?)
            `,
            [data.name, data.units]
        )
    })
}



// create a db object
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// Create connection to SQLITE
export async function openDb(){
    return open({
        filename: './data.db',
        driver: sqlite3.Database
    })
}






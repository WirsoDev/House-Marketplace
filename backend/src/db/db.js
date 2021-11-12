// create a db object

const sqlite = require('sqlite3')
const db = new sqlite.Database('./src/db/data.db')
module.exports = db




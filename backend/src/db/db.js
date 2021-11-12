// create a db object

const sqlite = require('sqlite3')
const db = new sqlite.Database('./data.db')
module.exports = db




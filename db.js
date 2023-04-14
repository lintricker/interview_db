const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "dbadmin",
    host: "localhost",
    port: 5432,
    database: "interview_db"
})


module.exports = pool
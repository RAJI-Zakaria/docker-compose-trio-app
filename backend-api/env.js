const dotenv = require("dotenv")
const assert = require("assert")

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env' })
} else {
    dotenv.config({ path: '.env.development' })
}

 
const {
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASS,
    DB_NAME,
    PORT,
    JWT_SECRET,
} = process.env



assert(DB_HOST, "DB_HOST (database host) is required")
assert(DB_PORT, "DB_PORT (database port) is required")
assert(DB_USER, "DB_USER (database user) is required")
assert(DB_PASS, "DB_PASS (database password) is required")
assert(DB_NAME, "DB_NAME (database name) is required")

assert(JWT_SECRET, "JWT_SECRET is required")


module.exports = {
    SQL: {
        DB_HOST,
        DB_PORT,
        DB_USER,
        DB_PASS,
        DB_NAME
    },
    PORT,
    JWT_SECRET   
}

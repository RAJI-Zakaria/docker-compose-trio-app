const dotenv = require("dotenv")
const assert = require("assert");

if (process.env.NODE_ENV === 'production') {
    dotenv.config({ path: '.env' });
} else {
    dotenv.config({ path: '.env.development' });
}

const {
    PORT,
    API_SUPERVISION_URL,
    APP_SUPERVISION_URL
} = process.env

assert(API_SUPERVISION_URL, "API_SUPERVISION_URL is required to proxy to blog api")

assert(APP_SUPERVISION_URL, "APP_SUPERVISION_URL is required to proxy to blog api")

module.exports = {
    PORT,
    API_SUPERVISION_URL,
    APP_SUPERVISION_URL
}

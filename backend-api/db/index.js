const Sequelize = require("sequelize")
const {SQL} = require("../env")
const init_models = require("../models/init-models")

const CONFIGURATION = {
  host: SQL.DB_HOST,
  port: SQL.DB_PORT,
  dialect: 'mariadb',
  // define: {
  //   timestamps: false
  // },
  logging: SQL.DB_LOGGING === "true" ? console.log : false
}

 
const dbInstance = new Sequelize(SQL.DB_NAME, SQL.DB_USER, SQL.DB_PASS, CONFIGURATION)

const db = init_models(dbInstance);

db.dbInstance = dbInstance;


module.exports = db
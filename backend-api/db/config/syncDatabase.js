const {dbInstance} = require('../index')

exports.setupDatabase = () => {
    dbInstance.sync().then(() => { // This will sync the database with the models (update any changes)
        console.log("Database is synced")
    }).catch((err) => {
        console.log(err)
    })
}
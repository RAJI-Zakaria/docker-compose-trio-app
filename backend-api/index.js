//create an express app
const express = require('express');
const app = express();
const { setupDatabase } = require('./db/config/syncDatabase')
const { setupBasics } = require('./db/config/resReqConf')

const routers = require('./routes');
const auth = require('./routes/auth.route');

const authentication = require('./middlewares/authentication');


//syncing database based on models
setupDatabase()
//basic setup for the app : body parser and urlencoded ...
setupBasics(app) 

//use the express-static middleware
app.use(express.static('public'));


//define the first route
app.get('/api', (req, res) => {
    res.send('Hello from the API');
    }
);

//setting up  routers for the auth
app.use('/api/auth', auth)

// app.use('/api/auth', auth)

// app.use(authentication)

//setting up all routers for the app
app.use('/api', routers)

//start the server listening for requests
app.listen(3001, () => console.log('Server is running...'));


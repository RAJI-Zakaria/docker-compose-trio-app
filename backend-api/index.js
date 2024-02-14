//create an express app
const express = require('express');
const app = express();
//use the express-static middleware
app.use(express.static('public'));
//define the first route
app.get('/api', (req, res) => {
    res.send('Hello from the API');
    }
);
//start the server listening for requests
app.listen(3001, () => console.log('Server is running...'));


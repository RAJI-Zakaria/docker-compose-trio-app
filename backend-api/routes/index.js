const express = require('express');
const router = express.Router();
const userRoute = require('./user.route');
const authorization = require('../middlewares/authorization');



//authorization([1777, 1666])
router.use('/users',  userRoute); 



module.exports = router;

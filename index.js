"use strict";

const server =require('./src/server');
const {db} = require('./src/models/index.js');
require('dotenv').config();




db.sync().then(()=>{
 server.start(process.env.PORT || 3001);   
})







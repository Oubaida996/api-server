"use strict";

const express =require('express');
const cors =require('cors');
const logger =require('./middleware/logger');
const foodRoutes =require('./routes/food.route');
const clothesRoutes =require('./routes/clothes.route');

express().use(cors());

const app =express();
app.use(express.json());
app.use(cors());
app.use(logger);
app.use(foodRoutes);
app.use(clothesRoutes);



app.get('/' ,(req,res)=>{
    console.log("Home Page");
});




function start(port) {

    app.listen(port, ()=>{
        console.log(`server is running on port ${port}`);
    })
    
}


module.exports ={
    app:app,
    start:start
}
"use strict";

const logger = (req,res,next) =>{

    console.log("I love you");

    next();

}

module.exports =logger;
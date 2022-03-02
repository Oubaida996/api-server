"use strict"

const { Sequelize, DataTypes } = require('sequelize');
const Foods =require('./food.model');
const Clothes =require('./clothes.model');
const Collection =require('../classes/Collection');


require('dotenv').config();


const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

// console.log(POSTGRES_URL); to print it use this file as middleware . modules.exports =(req,res,next)=>{console.log(POSTGRES_URL);} 

const sequelizeOptions = process.env.NODE_ENV === 'production' ?   {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
    }
}:{};

const db = new Sequelize(POSTGRES_URL,sequelizeOptions);

 let foodTable =Foods(db,DataTypes);
 let clothesTable= Clothes(db ,DataTypes);

 let foodCollection = new Collection(foodTable);
 let clothesCollection = new Collection(clothesTable);




module.exports ={
    db :db,
    Foods: foodCollection,
    Clothes:clothesCollection
}







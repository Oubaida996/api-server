'use strict'

const express = require('express');
const router = express.Router();

const  {Foods}  = require('../models/index');


//Routes
router.get('/foods',getFoods);
router.get('/foods/:id',getFoodById);
router.post('/foods',createFoods);
router.put('/foods/:id',updateFoodById);
router.delete('/foods/:id',deleteFoodById);


async function getFoods(req,res) {
    let foods = await Foods.getData();
    res.json(foods);
}

async function getFoodById(req,res) {
    let  {id}   =req.params;
    let food = await Foods.getData(id);
    res.json(food);
}

async function createFoods(req,res) {
    let {body} =req;
    let food = await Foods.createData(body);
    res.json(food);
}

async function updateFoodById(req,res) {
    let  {id}   =req.params;
    let {body} =req;
    let food = await Foods.updateData(id ,body);
    res.json(food);
}



async function deleteFoodById(req,res) {
    let  {id}   =req.params;
    let food = await Foods.deleteData(id);
    res.json(food);
}



module.exports = router;
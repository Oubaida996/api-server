'use strict'

const express = require('express');
const router = express.Router();

const  {Clothes}  = require('../models/index');


//Routes
router.get('/clothes',getClothes);
router.get('/clothes/:id',getClothesById);
router.post('/clothes',createClothes);
router.put('/clothes/:id',updateClothesById);
router.delete('/clothes/:id',deleteClothesById);


async function getClothes(req,res) {
    let clothes = await Clothes.getData();
    res.json(clothes);
}

async function getClothesById(req,res) {
    let  {id}   =req.params;
    let clothes = await Clothes.getData(id);
    res.json(clothes);
}

async function createClothes(req,res) {
    let {body} =req;
    let clothes = await Clothes.createData(body);
    res.json(clothes);
}

async function updateClothesById(req,res) {
    let  {id}   =req.params;
    let {body} =req;
    let clothes = await Clothes.updateData(id ,body);
    res.json(clothes);
}



async function deleteClothesById(req,res) {
    let  {id}   =req.params;
    let clothes = await Clothes.deleteData(id);
    res.json(clothes);
}



module.exports = router;
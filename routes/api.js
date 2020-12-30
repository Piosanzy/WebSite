var express = require('express');
var router = express.Router();

const apiController = require('../controller/api/soccerApi/index');
router.get('/soccer/country',async function (req,res,next){
    const data = await apiController.getCountry();
    res.json(data);
})
router.get('/soccer/league',async function (req,res,next){
    const country = req.query.country;
    const data = await apiController.getLeague(country);
    res.json(data);
})
router.get('/number',async function (req,res,next){
    const number = req.query.number;
    res.json({number:Number(number)+1});
})
module.exports = router;
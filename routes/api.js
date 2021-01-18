var express = require('express');
var router = express.Router();

const covidApiController = require('../controller/api/covid/index');
const dateApiController = require('../controller/api/date/index');
router.get('/covid',async function (req,res,next) {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const searchType = req.query.searchType;

    if(typeof searchType === "undefined"){
        const data = await covidApiController().getCovidData(startDate,endDate);
        res.json(data);
    }else{
        if(searchType === "today"){
            const data = await covidApiController().getTodayCovidData();
            res.json(data);
        }
    }

});
//asasdasdas
router.get('/date',async function (req,res,next) {
    const data = await dateApiController().getDate();
    res.json(data);
});

module.exports = router;
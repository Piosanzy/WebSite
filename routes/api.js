var express = require('express');
var router = express.Router();

const covidApiController = require('../controller/api/covid/index');
const dateApiController = require('../controller/api/date/index');
router.get('/covid',async function (req,res,next) {
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    const pageNo = req.query.pageNo;

    const data = await covidApiController().getCovidData(startDate,endDate,pageNo);
    res.json(data);
});
router.get('/date',async function (req,res,next) {
    const data = await dateApiController().getDate();
    res.json(data);
})

module.exports = router;
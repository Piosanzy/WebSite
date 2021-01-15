const moment = require('moment');

const dateAPI = () =>{

    const getDate = async () =>{
        const today = moment().format("YYYYMMDD");
        const week = moment().subtract(7,'days').format("YYYYMMDD");
        const month = moment().subtract(1,'months').format("YYYYMMDD");
        return {
            today:today,
            aWeekAgo: week,
            aMonthAgo: month,
        }
    };

    return{
        getDate: getDate,
    };
}

module.exports = dateAPI;
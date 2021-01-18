const axios = require('axios');
const moment = require('moment');

const covidAPI = () =>{

    const getCovidData = async (startDate,endDate) =>{
        const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson`;
        const query = `?serviceKey=RzprTmSFRzohYExNGEPoo27CxYJ9OQHHOnxzOd8NZwaC0wSW23BUseq82dtc58ISw7yZmTgiLsQZwuOmvi1L3w%3D%3D&numOfRows=10&startCreateDt=${startDate}&endCreateDt=${endDate}&_type=json`;

        if(typeof startDate === "undefined"){
            return {ERROR:"시작 날짜가 존재하지 않습니다. (query: startData=[])"};
        }else if(typeof endDate === "undefined"){
            return {ERROR:"끝 날짜가 존재하지 않습니다. (query: endData=[])"};
        }else{
            const data = await axios.get(url+query);
            return data.data;
        }
    }

    const getTodayCovidData = async () =>{
        const startDate = moment().subtract(1,'days').format("YYYYMMDD");
        const endDate = moment().format("YYYYMMDD");

        const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson`;
        const query = `?serviceKey=RzprTmSFRzohYExNGEPoo27CxYJ9OQHHOnxzOd8NZwaC0wSW23BUseq82dtc58ISw7yZmTgiLsQZwuOmvi1L3w%3D%3D&numOfRows=10&startCreateDt=${startDate}&endCreateDt=${endDate}&_type=json`;

        const data = await axios.get(url+query);
        let increaseDecideCnt = [];
        data.data.response.body.items.item.map((item,i)=>{
           increaseDecideCnt[i] = item.decideCnt;
        });

        return {
            response:data.data.response,
            increaseDecideCnt:increaseDecideCnt[0]-increaseDecideCnt[1],
        };

    }

    return {
        getCovidData: getCovidData,
        getTodayCovidData:getTodayCovidData,
    };
};

module.exports = covidAPI;
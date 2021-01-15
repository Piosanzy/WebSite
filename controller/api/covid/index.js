const axios = require('axios');

const covidAPI = () =>{

    const getCovidData = async (startDate,endDate,pageNo) =>{
        const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson`;
        const query = `?serviceKey=RzprTmSFRzohYExNGEPoo27CxYJ9OQHHOnxzOd8NZwaC0wSW23BUseq82dtc58ISw7yZmTgiLsQZwuOmvi1L3w%3D%3D&pageNo=${pageNo}&numOfRows=10&startCreateDt=${startDate}&endCreateDt=${endDate}&_type=json`;

        if(typeof startDate === "undefined"){
            return {ERROR:"시작 날짜가 존재하지 않습니다. (query: startData=[])"};
        }else if(typeof endDate === "undefined"){
            return {ERROR:"끝 날짜가 존재하지 않습니다. (query: endData=[])"};
        }else if(typeof pageNo === "undefined"){
            return {ERROR:"페이지가 존재하지 않습니다. (query: pageNo=[])"};
        }else{
            const data = await axios.get(url+query);
            return data.data;
        }
    }

    return {
        getCovidData: getCovidData,
    };
};

module.exports = covidAPI;
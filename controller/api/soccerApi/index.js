const axios = require('axios');

const LiveSoccerApi = () =>{
    const getCountry = async () =>{
        const url = `https://livescore-api.com/api-client/countries/list.json?&key=Yn8LlxMMYD3jod9d&secret=ttlzTzqZzZXipWnojvaF3Wr1AulYIubc`;
        const apiData = await axios.get(url);
        return apiData.data;
    }
    const getLeague = async (country) =>{
        const url = `http://livescore-api.com/api-client/leagues/list.json?key=Yn8LlxMMYD3jod9d&secret=ttlzTzqZzZXipWnojvaF3Wr1AulYIubc`;
        const query = `&country=${country}`;
        const apiData = await axios.get(url+query);
        return apiData.data;
    }
    return{
        getCountry : getCountry,
        getLeague : getLeague,
    }
}

module.exports = LiveSoccerApi();
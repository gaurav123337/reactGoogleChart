import axios from 'axios';

const APIKEY = '70fa636dd96a095c1cf5ef3f08976311';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${APIKEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    let url = `${ROOT_URL}&q=${city},IN`;
    let request = axios.get(url);

    console.log('Request:', request);

    return{
        type: FETCH_WEATHER,
        payload:request
    }
}
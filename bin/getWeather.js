#!/usr/bin/env node

const http = require('http');
const format = require("./format.js");
/*const url = 'http://api.jirengu.com/weather.php';*/
const basicUrl = `apis.baidu.com`;
const basicPath = `/heweather/weather/free?`;
const cityList = require("../lib/city-list.js");

const ctid = cityList(process.argv.slice(2));
const city = process.argv.slice(2);

console.log(ctid);
console.log(city);

const wordString ='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const word = wordString.split('');


const option = {
    host: 'api.jirengu.com',
    path: '/weather.php'
}


/*const optionCityid = {
    url: `${basicUrl}cityid=${ctid}`,
    headers: {
        'apikey': 'd39eca91ccabaeeca89e5d94d14e7db8'
    }
}

const optionCity = {
    url: `${basicUrl}city=city`,
    headers: {
        'apikey': 'd39eca91ccabaeeca89e5d94d14e7db8'
    }
}*/

const optionCityid = {
    host: basicUrl,
    path: `${basicPath}cityid=${ctid}`,
    headers: {
        'apikey': 'd39eca91ccabaeeca89e5d94d14e7db8'
    }
}

const optionCity = {
    host: basicUrl,
    path: `${basicPath}city=city`,
    headers: {
        'apikey': 'd39eca91ccabaeeca89e5d94d14e7db8'
    }
}



const english = () => {
    const str = city + "";
    const arr = str.split('');
    for(let i of word) {
        if(i === arr[0]) {
            return true;
        }
    }
}


module.exports = (argv) => {
    if(city == 0) {
        const callback = response => {
            response.on('data', data=> {
                console.log(data);
                const json = JSON.parse(data);
                console.log(json);
            })
        }
        const req = http.request(option, callback);
        req.end();
    }
    else if(english()) {

    }
    else {

    }
}



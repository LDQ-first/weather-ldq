#!/usr/bin/env node

const http = require('http');
const axios = require('axios');
const format = require("./format.js");
const {success} = format;


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

const config = {

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




module.exports = () => {
    if(city == '') {
        axios.get('http://api.jirengu.com/weather.php').then((response) => {
            console.log(response.data);
           /* const json = JSON.parse(JSON.stringify(response.data));
            console.log(json);*/
            success(response.data);
        })
        /*const callback = response => {
            response.on('data', data => {
                success(data);
                //var json = JSON.parse(data);
               // success(JSON.parse(data));
            })
             response.on('end', () => {
                console.log("\n");
            })
        }
        const req = http.request(option, callback);
        req.end();*/
    }
    else if(english()) {

    }
    else {

    }
}



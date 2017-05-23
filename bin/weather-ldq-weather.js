#!/usr/bin/env node

const argv = require('yargs')
        .usage('Usage: get-weather [城市拼音，不填写默认为所在城市]')
        .example('get-weather beijing')
        .argv;
const getWeather = require('./getWeather.js');

if(argv){
    getWeather();
}
else {
    getWeather(argv);
}








#!/usr/bin/env node

exports.success = data => {
    /*const data = JSON.stringify(json);
    console.log(data);*/
    //const data = JSON.parse(json);
    
    console.log('城市:' + data.results[0].currentCity);
    console.log('时间:' + data.results[0].weather_data[0].date);
    console.log('天气:' + data.results[0].weather_data[0].weather);
    console.log('温度:' + data.results[0].weather_data[0].temperature);
    console.log('风:' +data.results[0].weather_data[0].wind);
    console.log('pm2.5:' + data.results[0].pm25);
    console.log(data.results[0].index[0].tipt +':' + data.results[0].index[0].des);
    console.log(data.results[0].index[1].tipt +':' + data.results[0].index[1].des);
    console.log(data.results[0].index[2].tipt +':' + data.results[0].index[2].des);
    console.log(data.results[0].index[3].tipt +':' + data.results[0].index[3].des);
    console.log(data.results[0].index[4].tipt +':' + data.results[0].index[4].des);
    console.log(data.results[0].index[5].tipt +':' + data.results[0].index[5].des);
    console.log('');

    console.log('======================未来三天天气情况==================');

    console.log('');
    console.log(data.results[0].weather_data[1].date +' '+ data.results[0].weather_data[1].weather +' '+ data.results[0].weather_data[1].wind +' '+ data.results[0].weather_data[1].temperature);
    console.log(data.results[0].weather_data[2].date +' '+ data.results[0].weather_data[2].weather +' '+ data.results[0].weather_data[2].wind +' '+ data.results[0].weather_data[2].temperature);
    console.log(data.results[0].weather_data[3].date +' '+ data.results[0].weather_data[3].weather +' '+ data.results[0].weather_data[3].wind +' '+ data.results[0].weather_data[3].temperature);
    console.log('');

    console.log('===========================end=========================')
} 
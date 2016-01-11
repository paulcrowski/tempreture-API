/**
 * Created by Pol on 2016-01-11.
 */

$(document).ready(function() {

    var weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';

    var link = weatherAPI+"?q=Warsaw&units=metric&APPID=6d3c2493e4b76eb46bf2016a941e2f27"

    function showWeather(weatherReport) {
        $('#temperature').text(weatherReport.main.temp);
    }

    $.getJSON(link, showWeather);
});

/**
 * Setup part with libraries and initial settings
 */

var apiKey = "cH39qeWE1GR7x8bEBUECAc45ZINi63lLal8qfPOl";

function getNasaURL(apiKey, date) {
    return "https://api.nasa.gov/planetary/apod?api_key=" + apiKey + "&date=" + date;
}

/**
 * Get data from NASA and set IMAGE
 * @param date
 * @returns {null}
 */
function imageAjaxRequest(date) {
    var request = new XMLHttpRequest();
    var nasaDada = null;
    request.open('GET', getNasaURL(apiKey, date), true);
    request.addEventListener('load', function () {
        if (request.status >= 200 && request.status < 400) {
            nasaDada = JSON.parse(request.responseText);
            $("#nasaImage").attr("src", nasaDada.url);
        } else {
            console.log("Error in network request: " + request.statusText);
        }
    });
    request.send(null);
    return nasaDada;
}

//Format Datepicker as on NASA
$(function () {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true,
        minDate: -3653, //limit calendar to 10 years
        maxDate: "+0D" //limit future
    })
    $("#datepicker").datepicker("option", "dateFormat", "yy-mm-dd");
});

$(document).ready(function () {
    var todayDate = new Date("2021-12-01T00:00:00.000+08:00").toISOString().slice(0, 10);
    $("#datepicker:text").val(todayDate);
});


$("#getImage").click(function () {
    imageAjaxRequest($("#datepicker").val());
});
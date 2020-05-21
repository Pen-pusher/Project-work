// A>K>A Piyush Chakraborty
// Weatehr app

var gV = {
  toggled: true,
};

$(document).ready(function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
    console.log("navigation available");
  } else {
    console.log("no navigation");
    geoFail();
  }
});

function success(data) {
  $("section").show();
  console.log(data.coords.latitude);
  getWeather(data.coords.latitude, data.coords.longitude);
  getLocationInfo(null, data.coords.latitude, data.coords.longitude);
}

function error(err) {
  console.log("error", err);
  //allow the user to input  the data
  geoFail();
}

//funtion to get lat and lon based on navigator geolocationName failure or denial
function geoFail() {
  var input;
  //appending  a zipcode based search to the page
  $("body").prepend(
    '<div class="location-search"><h1>Find your local weather</h1><span><input type="text" name="input-field" autofocus placeholder="Mumbai"><button type="button" name="search"><i class="fa fa-search" aria-hidden="true"></i> Search</button></span></div>'
  );
  //if the search icon/button is clicked, or enter key is pressed...
  function proccessInput() {
    //get any zipcode in the users input and use that first
    input = document.getElementsByName("input-field")[0].value;
    var re = new RegExp(/\d{6}/, "gi"); //searches for 6 consecutive numbers for the pincode search
    var matched = input.match(re);
    if (matched != null) {
      // if the input is a zipcode
      getLocationInfo(matched[0]);
      console.log(matched[0]);
    } else {
      //get the city and state val
      var new_arr = input.split(",");
      console.log(new_arr);
      getLocationInfo(null, null, null, new_arr);
    }
  }

  $("button").click(function () {
    proccessInput();
  });
  $(window).keypress(function (event) {
    var code = event.which;
    // if the user press enter
    if (code === 13) {
      proccessInput();
    }
  });
}

function getLocationInfo(zip, lat, lon, name) {
  var locationName;
  if (zip) {
    console.log("user searched by zip");
    //call to google geocoding using zip only
    $.getJSON(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        zip +
        "&key=AIzaSyCuugDMliUtuYZ1tT2PZbgB_LMvOYi0wFU",
      (loc) => {
        locationName = loc.results[0].formatted_address;
        processCityName(locationName);
        //get the weather info
        getWeather(
          loc.results[0].geometry.location.lat,
          loc.results[0].geometry.location.lng
        );
      }
    );
  } else if (zip === null && lat && lon) {
    console.log("user used nav");
    //get the city name based on geographic coordinates
    $.getJSON(
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        lat +
        "," +
        lon +
        "&key=AIzaSyCuugDMliUtuYZ1tT2PZbgB_LMvOYi0wFU",
      (info) => {
        for (var i = 0; i < info.results.length; i++) {
          for (var j = 0; j < info.results[i].types.length; j++) {
            if (info.results[i].types[j] == "locality") {
              locationName = info.results[i].formatted_address;
              processCityName(locationName);
            }
          }
        }
      }
    );
  }
  //call to google geocoding using city and state
  else if (zip === null && lat === null && lon === null && name) {
    console.log("user searched by name");
    $.getJSON(
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
        name[0] +
        "+" +
        name[1] +
        "&key=AIzaSyCuugDMliUtuYZ1tT2PZbgB_LMvOYi0wFU",
      (loc) => {
        locationName = loc.results[0].formatted_address;
        processCityName(locationName);
        getWeather(
          loc.results[0].geometry.location.lat,
          loc.results[0].geometry.location.lng
        );
      }
    );
  }

  //search through the reverse geolocationName info to find the right info
  function processCityName(location) {
    location = location.split(",");
    for (var f = 0; f < location.length - 2; f++) {
      location.pop();
    }
    location = location.join(", ");
    //insert the formatted location
    var locP = document.getElementById("location");
    locP.innerText = location;
  }
}

function getWeather(lat, lon) {
  //this request has to be done as jsonp because of cross-domain policies on the browser
  //adding ?callback=? makes the server treat the request as jsonp, the other option would be
  //to use .ajax(dataType: "jsonp")
  $.getJSON(
    "https://api.forecast.io/forecast/b59cb056ae86ddcff4531258c647bf0d/" +
      lat +
      "," +
      lon +
      "?callback=?",
    function (weatherData) {
      console.log(weatherData);
      $(".location-search").hide();

      //get main current icon
      var current_icon = weatherData.currently.icon.toUpperCase();

      //create icon objects for current weather
      var skycon = new Skycons({
        // color for the weather icons you can change it to wahtever color you want
        color: "black",
      });
      var windIcon = new Skycons({
        color: "black",
      });
      var rainIcon = new Skycons({
        color: "black",
      });

      //add the skyccon icon types
      skycon.add("skycon", current_icon);
      rainIcon.add("rain-canvas", "rain");
      windIcon.add("wind-canvas", "wind");

      //Animating  the icons
      skycon.play();
      windIcon.play();
      rainIcon.play();

      var rainProb = weatherData.currently.precipProbability * 100;
      var windSpeed = Math.round(weatherData.currently.windSpeed);
      var app_temp = Math.round(weatherData.currently.apparentTemperature);

      tempScale(weatherData.currently.temperature);
      tempToggle(
        weatherData.currently.temperature,
        app_temp,
        weatherData.daily.data
      );

      $("#description").html(weatherData.currently.summary);
      $("#rain").html(rainProb + "%");
      $("#wind").html(windSpeed + " Mph");
      $("#app-temp").html("Feels like: " + app_temp + "&deg;");
      populateForecast(weatherData.daily.data);

      $("section").show();

      setTempPosition();
    }
  );
}

function populateForecast(forecast_arr) {
  var date;
  var day_arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var forecast_days;
  var height;
  var temp;
  var color;

  //populating names of days
  date = new Date();
  date = date.getDay();

  //populate the icons and temperature
  for (var i = 1; i <= 5; i++) {
    forecast_days = date + i;
    if (forecast_days > 6) {
      forecast_days -= 7;
    }
    $(".day-container" + i + " p").html(day_arr[forecast_days]);
    //end  the number of days
    var mini_icon = new Skycons({
      color: "black",
    });
    mini_icon.add("canvas" + i, forecast_arr[i].icon);
    mini_icon.play();
    //temperature
    $(".day-container" + i + " span").html(
      Math.round(forecast_arr[i].temperatureMax) + "&deg;F"
    );
    //make the color and fill heights for mini scale
    // temp = Math.round(forecast_arr[i].temperatureMax);

    // if you want to represent color in the forcast for each day

    // if (temp >= 0 && temp < 60) {
    //   color = "#5daefe";
    // } else if (temp >= 60 && temp < 80) {
    //   color = "#5dfeae";
    // } else if (temp >= 80 && temp < 90) {
    //   color = "#feae5d";
    // } else {
    //   color = "tomato";
    // }
    height = forecast_arr[i].temperatureMax;
    $(".day-container" + i + " .mini-fill").css({
      height: height,
      "background-color": color,
    });
  }
}

//working
function tempToggle(tempInF, app_temp, forecast_arr) {
  tempInF = Math.round(tempInF);
  var tempInC = Math.round((tempInF - 32) * (5 / 9));
  var app_tempInC = Math.round((app_temp - 32) * (5 / 9));
  var tempElement = document.getElementById("temp");
  tempElement.innerText = tempInF;
  tempElement.innerHTML += "&deg;F";
  //attach click handler to toggle to/from F/C
  $("#temp").click(function () {
    if (gV.toggled === true) {
      $("#app-temp").html("Feels like: " + app_tempInC + "&deg;");

      tempElement.innerText = tempInC;
      tempElement.innerHTML += "&deg;C";
      for (var i = 1; i <= 5; i++) {
        tempC = Math.round((forecast_arr[i].temperatureMax - 32) * (5 / 9));
        $(".day-container" + i + " span").html(tempC + "&deg;C");
      }
      gV.toggled = false;
    } //end if statement
    else if (gV.toggled === false) {
      $("#app-temp").html("Feels like: " + app_temp + "&deg;");

      tempElement.innerText = tempInF;
      tempElement.innerHTML += "&deg;F";
      for (var j = 1; j <= 5; j++) {
        $(".day-container" + j + " span").html(
          Math.round(forecast_arr[j].temperatureMax) + "&deg;F"
        );
      }
      gV.toggled = true;
    }
  });
}

//working
function tempScale(temp) {
  //convert temperature into a usable height
  var fill_height = Math.round(temp * 1.7);
  var color;
  temp = Math.round(temp);

  var applyCSS = () => {
    $("#fill").css({
      "background-color": color,
      height: fill_height,
    });
  };
  // color for the celcius and farenheit part depending on the weather
  if (temp >= 0 && temp < 60) {
    color = "#5daefe";
    applyCSS();
  } else if (temp >= 60 && temp < 80) {
    color = "#5dfeae";
    applyCSS();
  } else if (temp >= 80 && temp < 90) {
    color = "#feae5d";
    applyCSS();
  } else {
    color = "#fe5d5d";
    applyCSS();
  }
}

// setting the temperature arrow at top

function setTempPosition() {
  var arrowLoc = $("#fill").offset();
  var p_height = $("#temp").height();
  var scale_width = $(".scale").width();
  console.log(arrowLoc);
  $(".temp").offset({
    top: arrowLoc.top - p_height / 2,
    left: arrowLoc.left + scale_width,
  });
  $("#temp").offset({
    top: arrowLoc.top - p_height / 2,
    left: arrowLoc.left + scale_width + 20,
  });
}

// E.N.D

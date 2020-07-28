// Getting Latitude and Longitude

window.onload = getMyLocation

var map;

var options = {
  enableHighAccuracy: true,
  timeout: 300000,
  maximumAge: 200
};

function getMyLocation() {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(displayLocation, displayError);
    var watchButton = document.getElementById("watch");
    watchButton.onclick = watchLocation;
    var clearWatchbutton = document.getElementById("clearWatch");
    clearWatchbutton.onclick = clearWatch;
  }

  else {
    alert("Sorry, there is no geolocation support");
  }

}

function displayError(error) {

  var errorTypes = {
    0: "Unknown error",
    1: "Permission denied by user",
    2: "Position is not available",
    3: "Request timed out"
  }

  var errorMessage = errorTypes[error.code];
  if (error.code == 0 || error.code == 2) {
    errorMessage = errorMessage + " " + error.message;
  }
  var div = document.getElementById("location");
  div.innerHTML = errorMessage;
}

function displayLocation(position) {
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;
  var div = document.getElementById("location");
  div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
  div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";
  var km = computeDistance(position.coords, ourCoords);
  var distance = document.getElementById("distance");
  distance.innerHTML = "You are " + km + " km from Ristorante Amalfi";
  showMap(position.coords);
}

// Calculating Distance: 

var ourCoords = {
  latitude: 40.380201,
  longitude: 14.360791
};

function computeDistance(startCoords, destCoords) {
  var startLatRads = degreesToRadians(startCoords.latitude);
  var startLongRads = degreesToRadians(startCoords.longitude);
  var destLatRads = degreesToRadians(destCoords.latitude);
  var destLongRads = degreesToRadians(destCoords.longitude);

  var Radius = 6371; // radius of the earth in km      
  var distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) + Math.cos(startLatRads) * Math.cos(destLatRads) * Math.cos(startLongRads - destLongRads)) * Radius;
  return distance.toFixed(2);
}

function degreesToRadians(degrees) {
  var radians = (degrees * Math.PI) / 180;
  return radians;
}

function showMap(coords) {

  var googleLatAndLong = new google.maps.LatLng(coords.latitude,
    coords.longitude);

  var mapOptions = {
    zoom: 5,
    center: googleLatAndLong,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };
  var mapDiv = document.getElementById("map");
  map = new google.maps.Map(mapDiv, mapOptions);
  // add marker

  var title = "Your Location";
  var content = "Your are here.";
  addMarker(map, googleLatAndLong, title, content);
}

function addMarker(map, latlong, title, content) {

  var markerOptions = {
    position: latlong,
    map: map,
    title: title,
    clickable: true
  };

  var marker = new google.maps.Marker(markerOptions);
  var infoWindowOptions = {
    content: content,
    position: latlong
  };

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
  google.maps.event.addListener(marker, "click", function () {
    infoWindow.open(map);
  })

};

function clearWatch() {
  if (watchId) {
    navigator.geolocation.clearWatch(watchId)
    watchId = null;

  }
}

function watchLocation() {
  watchId = navigator.geolocation.watchPosition(displayLocation, displayError, options);
}
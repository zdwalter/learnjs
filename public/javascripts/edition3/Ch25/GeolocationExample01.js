//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch25/GeolocationExample01.htm
//Geolocation Example
window.onload = function(){
    document.getElementById("geo-btn").onclick = function(){
        navigator.geolocation.getCurrentPosition(function(position){
            document.getElementById("output").innerHTML = "Latitude is " + position.coords.latitude +
                "<br>Longitude is " + position.coords.longitude;
        }, function(error){
            document.getElementById("output").innerHTML = error.message || "An error occurred while trying to get location.";
        });
    };
};

    document.write(navigator.geolocation ? "Your browser supports the Geolocation API." : "Your browser does not support the Geolocation API.");
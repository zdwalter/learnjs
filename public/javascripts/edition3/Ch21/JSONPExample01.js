//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch21/JSONPExample01.htm
//JSONP Example
    
function handleResponse(response){
    print("You're at IP address " + response.ip + ", which is in " + response.city + ", " + response.region_name);
}
    
var script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);
    
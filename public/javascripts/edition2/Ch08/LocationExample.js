//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch08/LocationExample.htm
//Location Example
           
function getQueryStringArgs(){

    //get query string without the initial ?
    var qs = (location.search.length > 0 ? location.search.substring(1) : "");
    
    //object to hold data
    var args = {};
    
    //get individual items
    var items = qs.split("&");
    var item = null,
        name = null,
        value = null;
    
    //assign each item onto the args object
    for (var i=0; i < items.length; i++){
        item = items[i].split("=");
        name = decodeURIComponent(item[0]);
        value = decodeURIComponent(item[1]);
        args[name] = value;
    }
    
    return args;
}

//assume query string of ?q=javascript&num=10

var args = getQueryStringArgs();

print(args["q"]);     //"javascript"
print(args["num"]);   //"10"

    
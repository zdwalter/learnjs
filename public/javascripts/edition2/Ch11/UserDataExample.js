//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/UserDataExample.htm
//User Data Example
var div = document.createElement("div");
div.setUserData("name", "Nicholas", function(operation, key, value, src, dest){
    if (operation == 1){
        dest.setUserData(key, value, function(){});
    }
});

var newDiv = div.cloneNode(true);
print(newDiv.getUserData("name"));    //"Nicholas"

    
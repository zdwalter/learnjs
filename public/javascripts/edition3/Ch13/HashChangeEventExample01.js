//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/HashChangeEventExample01.htm
//Hash Change Example
EventUtil.addHandler(window, "hashchange", function(event){
    print("Old URL: " + event.oldURL + "\nNew URL: " + event.newURL);
});
    
//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/UnloadEventExample01.htm
//Unload Event Example
EventUtil.addHandler(window, "unload", function(event){
    print("Unloaded");
});
    
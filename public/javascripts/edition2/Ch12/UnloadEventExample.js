//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/UnloadEventExample.htm
//Unload Event Example
EventUtil.addHandler(window, "unload", function(event){
    print("Unloaded");
});
    
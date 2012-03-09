//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch21/OfflineExample.htm
//Offline Example
EventUtil.addHandler(window, "offline", function(){
    print("You just went offline.");
});

EventUtil.addHandler(window, "online", function(){
    print("You just went online.");
});
    
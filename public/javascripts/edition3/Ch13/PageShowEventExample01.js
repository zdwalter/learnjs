//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/PageShowEventExample01.htm
//PageShow/PageHide Event Example
    (function(){
var showCount = 0;
EventUtil.addHandler(window, "load", function(){
    print("Load fired");            
});
EventUtil.addHandler(window, "pageshow", function(event){
    showCount++;
    print("Show has been fired " + showCount + " times. Persisted? " + event.persisted);            
});
EventUtil.addHandler(window, "pagehide", function(event){
    print("Hiding. Persisted? " + event.persisted);            
});
    })();
    
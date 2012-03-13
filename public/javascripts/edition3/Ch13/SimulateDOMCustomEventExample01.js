//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/SimulateDOMCustomEventExample01.htm
//Simulating DOM Text Input Events Example
    
    (function(){
var btn = document.getElementById("myBtn");
var div = document.getElementById("myDiv"),
                
EventUtil.addHandler(div, "myevent", function(event){
   print("DIV: " + event.detail);
});

EventUtil.addHandler(document, "myevent", function(event){
   print("DOCUMENT: " + event.detail);
});

EventUtil.addHandler(btn, "click", function(event){

    var event;
    
    if (document.implementation.hasFeature("CustomEvents", "3.0")){
        event = document.createEvent("CustomEvent");
        event.initCustomEvent("myevent", true, false, "Hello world!");
        div.dispatchEvent(event);
    }


});

    })();
    
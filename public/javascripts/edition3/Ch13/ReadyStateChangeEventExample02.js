//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/ReadyStateChangeEventExample02.htm
//ReadyStateChange Event Example
EventUtil.addHandler(window, "load", function(){

    //create a new <script/> element.
    var script = document.createElement("script");
    EventUtil.addHandler(script, "readystatechange", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        if (target.readyState == "loaded" || target.readyState == "complete"){
            EventUtil.removeHandler(target, "readystatechange", arguments.callee);
            print("Script Loaded");
        }
    });
    script.src = "example.js";
    document.body.appendChild(script);
    
    //create a new <link/> element
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel= "stylesheet";
    
    EventUtil.addHandler(link, "readystatechange", function(event){
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);
        if (target.readyState == "loaded" || target.readyState == "complete"){
            EventUtil.removeHandler(target, "readystatechange", arguments.callee);
            print("CSS Loaded");
        }
    });
    link.href = "example.css";
    document.getElementsByTagName("head")[0].appendChild(link);
    
});
    
//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch12/LoadEventExample7.htm
//Load Event Example
EventUtil.addHandler(window, "load", function(){

    var script = document.createElement("script");
    EventUtil.addHandler(script, "load", function(event){
        print("Loaded");
    });
    script.src = "example.js";
    document.body.appendChild(script);
    
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel= "stylesheet";
    
    //opera only
    EventUtil.addHandler(link, "load", function(event){
        print("css loaded");
    });
    link.href = "example.css";
    document.getElementsByTagName("head")[0].appendChild(link);
});
    
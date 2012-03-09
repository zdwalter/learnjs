//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/DynamicScriptExample.htm
//Dynamic Script Example
function addScript(){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.text = "function sayHi(){print('hi');}";
    document.body.appendChild(script);
    sayHi();
}

    
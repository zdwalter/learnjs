//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/DynamicScriptExample01.htm
//Dynamic Script Example
function addScript(){
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.text = "function sayHi(){print('hi');}";
    document.body.appendChild(script);
    sayHi();
}

    
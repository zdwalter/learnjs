//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch10/DynamicScriptExample02.htm
//Dynamic Script Example 2
    
function loadScriptString(code){
    var script = document.createElement("script");
    script.type = "text/javascript";
    try {
        script.appendChild(document.createTextNode(code));
    } catch (ex){
        script.text = code;
    }
    document.body.appendChild(script);
}
    
function addScript(){
    loadScriptString("function sayHi(){print('hi');}");
    sayHi();
}

    
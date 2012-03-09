//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch10/DynamicStyleExample2.htm
//Dynamic Style Example 2
function loadStyleString(css){
    var style = document.createElement("style");
    style.type = "text/css";
    try{
        style.appendChild(document.createTextNode(css));
    } catch (ex){
        style.styleSheet.cssText = css;
    }
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
}
    
function addStyle(){
    loadStyleString("body{background-color:red}"); 
}

    
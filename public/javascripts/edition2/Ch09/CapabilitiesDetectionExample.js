//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch09/CapabilitiesDetectionExample.htm
//Capabilities Detection Example

//need to wait until onload so body is available    
window.onload = function(){

    function getWindowWidth(){
        if (window.innerWidth){
            return window.innerWidth;
        } else if (document.documentElement.clientWidth){
            return document.documentElement.clientWidth;
        } else if (document.body.clientWidth){
            return document.body.clientWidth;
        }
    }
    
            
    //determine if the browser has Netscape-style plugins
    var hasNSPlugins = !!(navigator.plugins && navigator.plugins.length);
    
    //determine if the browser has basic DOM Level 1 capabilities
    var hasDOM1 = !!(document.getElementById && document.createElement && 
                   document.getElementsByTagName);
    
    print("Window width: " + getWindowWidth());
    print("Supports Netscape plugins? " + hasNSPlugins);
    print("Supports Core DOM 1? " + hasDOM1);
}
    
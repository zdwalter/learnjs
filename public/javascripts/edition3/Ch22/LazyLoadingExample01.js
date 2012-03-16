//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/LazyLoadingExample01.htm
//Lazy Loading Example
function createXHR(){
    if (typeof XMLHttpRequest != "undefined"){
        createXHR = function(){
            return new XMLHttpRequest();
        };
    } else if (typeof ActiveXObject != "undefined"){
        createXHR = function(){                    
            if (typeof arguments.callee.activeXString != "string"){
                var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                                "MSXML2.XMLHttp"],
                    i, len;
        
                for (i=0,len=versions.length; i < len; i++){
                    try {
                        new ActiveXObject(versions[i]);
                        arguments.callee.activeXString = versions[i];
                    } catch (ex){
                        //skip
                    }
                }
            }
        
            return new ActiveXObject(arguments.callee.activeXString);
        };
    } else {
        createXHR = function(){
            throw new Error("No XHR object available.");
        };
    }
    
    return createXHR();
}

var xhr1 = createXHR();
var xhr2 = createXHR();

    
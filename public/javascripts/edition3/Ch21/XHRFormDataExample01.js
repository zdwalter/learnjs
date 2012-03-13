//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch21/XHRFormDataExample01.htm
//XHR FormData Exampledocument.writeln("<p>You browser " + (typeof FormData != "undefined" ? "does" : "doesn't") + " support the FormData type.");</p>
    
function createXHR(){
    if (typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined"){
        if (typeof arguments.callee.activeXString != "string"){
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"],
                i, len;
    
            for (i=0,len=versions.length; i < len; i++){
                try {
                    var xhr = new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    return xhr;
                } catch (ex){
                    //skip
                }
            }
        }
    
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}

function submitData(){
    var xhr = createXHR();        
    xhr.onreadystatechange = function(event){
        if (xhr.readyState == 4){
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
                print(xhr.responseText);
            } else {
                print("Request was unsuccessful: " + xhr.status);
            }
        }
    };
    
    xhr.open("post", "postexample.php", true);
    var form = document.getElementById("user-info");            
    xhr.send(new FormData(form));
}

    
//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch21/XHRPostExample01.htm
//XHR Post Example
    
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
        
function serialize(form){        
    var parts = new Array();
    var field = null;
    
    for (var i=0, len=form.elements.length; i < len; i++){
        field = form.elements[i];
    
        switch(field.type){
            case "select-one":
            case "select-multiple":
                for (var j=0, optLen = field.options.length; j < optLen; j++){
                    var option = field.options[j];
                    if (option.selected){
                        var optValue = "";
                        if (option.hasAttribute){
                            optValue = (option.hasAttribute("value") ? 
                                        option.value : option.text);
                        } else {
                            optValue = (option.attributes["value"].specified ? 
                                        option.value : option.text);
                        }
                        parts.push(encodeURIComponent(field.name) + "=" + 
                                   encodeURIComponent(optValue));
                    }
                }
                break;
                
            case undefined:     //fieldset
            case "file":        //file input
            case "submit":      //submit button
            case "reset":       //reset button
            case "button":      //custom button
                break;
                
            case "radio":       //radio button
            case "checkbox":    //checkbox
                if (!field.checked){
                    break;
                }
                /* falls through */
                            
            default:
                parts.push(encodeURIComponent(field.name) + "=" + 
                    encodeURIComponent(field.value));
        }
    }        
    return parts.join("&");
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
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var form = document.getElementById("user-info");            
    xhr.send(serialize(form));
}

    
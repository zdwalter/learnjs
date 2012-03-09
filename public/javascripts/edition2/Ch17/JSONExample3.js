//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch17/JSONExample3.htm
//JSON Example
function createXHR(){
    if (typeof XMLHttpRequest != "undefined"){
        return new XMLHttpRequest();
    } else if (typeof ActiveXObject != "undefined"){
        if (typeof arguments.callee.activeXString != "string"){
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                            "MSXML2.XMLHttp"];
    
            for (var i=0,len=versions.length; i < len; i++){
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
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

var xhr = createXHR();        
xhr.onreadystatechange = function(){
    if (xhr.readyState == 4){
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            var contacts = JSON.parse(xhr.responseText);
            var list = document.getElementById("contacts");
            for (var i=0, len=contacts.length; i < len; i++){
                var li = document.createElement("li");
                li.innerHTML = "<a href=\"mailto:" + contacts[i].email + "\">" + contacts[i].name + "</a>";
                list.appendChild(li);
            }
        } 
    }
};
xhr.open("get", "addressbook.php", true);
xhr.send(null);


    
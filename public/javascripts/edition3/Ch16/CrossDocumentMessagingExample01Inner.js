//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch16/CrossDocumentMessagingExample01Inner.htm
//Cross Document Messaging Example
    EventUtil.addHandler(window, "message", function(event){
var status = document.getElementById("status");

//you always check for origin, but it won't work on a local file
//if(event.origin == "http://www.example.com"){
    status.innerHTML = "parent said: " + event.data;        
//}
    });
    
    EventUtil.addHandler(document.getElementById("btn"), "click", function(event){
var message = document.getElementById("message").value;
    
if (parent.postMessage){
    parent.postMessage(message, "*");  //NOTE: Star only for local files, never do this on the Internet
} else {
    print("Your browser doesn't support Cross Document Messaging.");
}

    });
    
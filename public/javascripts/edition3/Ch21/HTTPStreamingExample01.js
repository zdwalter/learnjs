//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch21/HTTPStreamingExample01.htm
//HTTP Streaming Example
    
function createStreamingClient(url, progress, finished){        
    
    var xhr = new XMLHttpRequest(),
        received = 0;
        
    xhr.open("get", url, true);
    xhr.onreadystatechange = function(){
        var result;
        
        if (xhr.readyState == 3){
        
            //get only the new data and adjust counter
            result = xhr.responseText.substring(received);
            received += result.length;
            
            //call the progress callback
            progress(result);
            
        } else if (xhr.readyState == 4){
            finished(xhr.responseText);
        }
    };
    xhr.send(null);
    return xhr;
}

var client = createStreamingClient("streaming.php", function(data){
                print("Received: " + data);
             }, function(data){
                print("Done!");
             });

    
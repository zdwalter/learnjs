//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch21/ImagePingExample01.htm
//Image Ping Example
var img = new Image();
img.onload = img.onerror = function(){
    print("Done!");
};
img.src = "http://www.example.com/test?name=Nicholas"; 

    
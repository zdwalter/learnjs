//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/GetElementsByClassNameExample01.htm
//getElementsByClassName() Example
    
    
if (document.getElementsByClassName){

    //highlight all tags with yellow color
    var tags = document.getElementsByClassName("tag");
    for (var i=0, len=tags.length; i < len; i++){
        tags[i].style.backgroundColor = "yellow";
    }
} else {
    print("getElementsByClassName() is not supported in this browser.");
}   


    
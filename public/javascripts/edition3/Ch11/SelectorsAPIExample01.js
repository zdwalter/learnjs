//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/SelectorsAPIExample01.htm
//Selectors API Example
    
if (document.querySelector){

    //get the body element
    var body = document.querySelector("body");
    print(body.tagName);
                       
    //get the element with the ID "myDiv"
    var myDiv = document.querySelector("#myDiv");
    print(myDiv);
                       
    //get first element with a class of "selected"
    var selected = document.querySelector(".selected");
    print(selected.innerHTML);
                       
    //get first image with class of "button"
    var img = document.body.querySelector("img.button");
    print(img);


} else {
    print("Selectors API not supported in this browser");
}

    
//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch11/SelectorsAPIExample02.htm
//Selectors API Example
    
if (document.querySelectorAll){
    
    //get all <em> elements in a <div> (similar to getElementsByTagName("em"))
    var ems = document.getElementById("myDiv").querySelectorAll("em");
    print(ems.length);
                       
    //get all elements with class of "selected"
    var selecteds = document.querySelectorAll(".selected");
    print(selecteds.length);
    
    //get all <strong> elements inside of <p> elements
    var strongs = document.querySelectorAll("p strong");
    print(strongs.length);


} else {
    print("Selectors API not supported in this browser");
}

    
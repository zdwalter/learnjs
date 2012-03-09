//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch11/StyleObjectExample.htm
//Style Object Example
function changeStyles(){
    var myDiv = document.getElementById("myDiv");
    
    //set the background color
    myDiv.style.backgroundColor = "red";
    
    //change the dimensions
    myDiv.style.width = "100px";
    myDiv.style.height = "200px";
    
    //assign a border
    myDiv.style.border = "1px solid black";
}

function getStyles(){
    var myDiv = document.getElementById("myDiv");
    print(myDiv.style.backgroundColor);
    print(myDiv.style.width);
    print(myDiv.style.height);
}

    
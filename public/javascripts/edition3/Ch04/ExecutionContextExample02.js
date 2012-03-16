//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch04/ExecutionContextExample02.htm
//Execution Context Example 2
  
var color = "blue";

function changeColor(){
    var anotherColor = "red";

    function swapColors(){
        var tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        
        //color, anotherColor, and tempColor are all accessible here
    }

    //color and anotherColor are accessible here, but not tempColor        
    swapColors();
}

changeColor();

//anotherColor and tempColor aren't accessible here, but color is
print("Color is now " + color);
      
    
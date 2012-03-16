//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch04/ExecutionContextExample01.htm
//Execution Context Example 1
  
var color = "blue";

function changeColor(){
    if (color === "blue"){
        color = "red";
    } else {
        color = "blue";
    }
}

changeColor();

print("Color is now " + color);
      
    
//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch04/ExecutionContextExample7.htm
//Execution Context Example 7
var color = "blue";

function getColor(){
    var color = "red";
    return color;
}

print(getColor());  //"red"


      
    
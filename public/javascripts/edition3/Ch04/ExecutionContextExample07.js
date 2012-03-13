//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch04/ExecutionContextExample07.htm
//Execution Context Example 7
var color = "blue";

function getColor(){
    var color = "red";
    return color;
}

print(getColor());  //"red"


      
    
//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/GlobalObjectWindowExample.htm
//Global Object Window Example
    
var color = "red";

function sayColor(){
    print(window.color);
}

window.sayColor();  //"red"

    
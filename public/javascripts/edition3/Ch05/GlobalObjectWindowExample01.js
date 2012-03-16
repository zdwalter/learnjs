//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/GlobalObjectWindowExample01.htm
//Global Object Window Example
    
var color = "red";

function sayColor(){
    print(window.color);
}

window.sayColor();  //"red"

    
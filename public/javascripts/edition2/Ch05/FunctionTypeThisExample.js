//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/FunctionTypeThisExample.htm
//Function Type this Example

window.color = "red";
var o = { color: "blue" };

function sayColor(){
    print(this.color);
}

sayColor();     //red

o.sayColor = sayColor;
o.sayColor();   //blue



    
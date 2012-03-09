//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/FunctionTypeCallExample.htm
//Function Type call() Example

window.color = "red";
var o = { color: "blue" };

function sayColor(){
    print(this.color);
}

sayColor();            //red

sayColor.call(this);   //red
sayColor.call(window); //red
sayColor.call(o);      //blue

    
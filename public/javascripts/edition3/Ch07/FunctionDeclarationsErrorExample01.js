//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/FunctionDeclarationsErrorExample01.htm
//Function Declaration Error Example
    
    var condition = true;
    
    //never do this!
    if(condition){
function sayHi(){
    print("Hi!");
}
    } else {
function sayHi(){
    print("Yo!");
}
    }

    sayHi();
    
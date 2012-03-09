//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/FunctionTypeLengthPropertyExample.htm
//Function Type Length Property Example

function sayName(name){
    print(name);
}      

function sum(num1, num2){
    return num1 + num2;
}

function sayHi(){
    print("hi");
}

print(sayName.length);  //1
print(sum.length);      //2
print(sayHi.length);    //0

    
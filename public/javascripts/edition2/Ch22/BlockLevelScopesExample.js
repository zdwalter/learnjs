//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch22/BlockLevelScopesExample.htm
//Block Level Scopes Example
var num = 5;

let (num=10, multiplier=2){
    print(num * multiplier);    //20
}

print(num);   //5

var result = let(num=10, multiplier=2) num * multiplier;
print(result);  //20


    
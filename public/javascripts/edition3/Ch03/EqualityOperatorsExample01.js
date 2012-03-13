//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch03/EqualityOperatorsExample01.htm
//Equality Operators Example 1
    
print(null == undefined);    //true
print(null === undefined);   //false

print("NaN" == NaN);        //false
print("NaN" === NaN);       //false
print(NaN == NaN);          //false
print(NaN === NaN);         //false
print(NaN != NaN);          //true
print(NaN !== NaN);         //true

print(false == 0);          //true
print(false === 0);         //false
print(true == 1);           //true
print(true === 1);          //false

print(null == 0);           //false
print(undefined == 0);      //false

print(5 == "5");            //true
print(5 === "5");           //false                

    
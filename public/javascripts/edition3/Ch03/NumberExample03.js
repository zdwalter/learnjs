//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch03/NumberExample03.htm
//Number Example 3
  
print(NaN == NaN);       //false
print(isNaN(NaN));       //true
print(isNaN(10));        //false – 10 is a number
print(isNaN("10"));      //false – can be converted to number 10
print(isNaN("blue"));    //true – cannot be converted to a number
print(isNaN(true));      //false – can be converted to number 1


    
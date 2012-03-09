//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch05/DateTypeConstructorExample.htm
//Date Type Constructor Example
    
//January 1, 2000 at midnight in local time
var y2k = new Date(2000, 0);
print(y2k.toLocaleString());

//May 5, 2005 at 5:55:55 PM in local time
var allFives = new Date(2005, 4, 5, 17, 55, 55);
print(allFives.toLocaleString());


    
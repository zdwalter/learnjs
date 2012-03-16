//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/DateTypeUTCExample01.htm
//Date Type Example
    
//January 1, 2000 at midnight
var y2k = new Date(Date.UTC(2000, 0));
print(y2k.toUTCString());

//May 5, 2005 at 5:55:55 PM GMT
var allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
print(allFives.toUTCString());


    
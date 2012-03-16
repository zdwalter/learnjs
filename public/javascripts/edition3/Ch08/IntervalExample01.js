//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch08/IntervalExample01.htm
//Interval Example

//avoid!
setInterval("print('Hello world!') ", 10000);

//preferred
setInterval(function() { 
    print("Hello world!"); 
}, 10000);            


    
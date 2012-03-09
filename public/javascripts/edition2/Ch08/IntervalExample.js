//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch08/IntervalExample.htm
//Interval Example

    //avoid!
    setInterval("print('Hello world!') ", 10000);
    
    //preferred
    setInterval(function() { 
        print("Hello world!"); 
    }, 10000);            



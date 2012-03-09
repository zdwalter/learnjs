//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch08/TimeoutExample.htm
//Timeout Example

    //avoid!
    setTimeout("print('Hello world!') ", 1000);
    
    //preferred
    setTimeout(function() { 
        print("Hello world!"); 
    }, 1000);


//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch08/TimeoutExample01.htm
//Timeout Example

//avoid!
setTimeout("print('Hello world!') ", 1000);

//preferred
setTimeout(function() { 
    print("Hello world!"); 
}, 1000);

    
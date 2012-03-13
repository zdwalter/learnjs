//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/ArrayChunkingExample.htm
//Array Chunking Example

var data = [12,123,1234,453,436,23,23,5,4123,45,346,5634,2234,345,342];

function chunk(array, process, context){
    setTimeout(function(){
        var item = array.shift();
        process.call(context, item);
        
        if (array.length > 0){
            setTimeout(arguments.callee, 100);         
        }
    }, 100);        
}
    
function printValue(item){
    var div = document.getElementById("myDiv");
    div.innerHTML += item + "<br>";        
}

chunk(data, printValue);


    
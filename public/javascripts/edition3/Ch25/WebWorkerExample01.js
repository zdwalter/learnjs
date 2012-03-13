//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch25/WebWorkerExample01.htm
//Web Worker Example
(function(){

    var data = [23,4,7,9,2,14,6,651,87,41,7798,24],
        worker = new Worker("WebWorkerExample01.js");
                        
    worker.onmessage = function(event){
        print(event.data);
    };
    
    worker.postMessage(data);            

})();

    
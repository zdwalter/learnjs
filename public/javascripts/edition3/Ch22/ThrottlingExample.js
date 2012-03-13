//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/ThrottlingExample.htm
//Throttling Example
function throttle(method, scope) {
    clearTimeout(method.tId);
    method.tId= setTimeout(function(){
        method.call(scope);
    }, 100);
}
    
function resizeDiv(){
    var div = document.getElementById("myDiv");
    div.style.height = div.offsetWidth + "px";
}

window.onresize = function(){
    throttle(resizeDiv);
};



    
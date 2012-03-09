//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch18/ThrottlingExample.htm
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



    
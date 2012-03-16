//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/RepeatingTimersExample.htm
//Repeating Timers Example
setTimeout(function(){

   var div = document.getElementById("myDiv"),
       left = parseInt(div.style.left) + 5;
   div.style.left = left + "px";

   if (left < 200){
       setTimeout(arguments.callee, 50);
   }

}, 50);


    
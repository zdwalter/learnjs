//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch18/RepeatingTimersExample.htm
//Repeating Timers Example
setTimeout(function(){

   var div = document.getElementById("myDiv");
   var left = parseInt(div.style.left) + 5;
   div.style.left = left + "px";

   if (left < 200){
       setTimeout(arguments.callee, 50);
   }

}, 50);


    
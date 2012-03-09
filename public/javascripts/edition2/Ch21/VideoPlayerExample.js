//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch21/VideoPlayerExample.htm
//Custom Video Player Example
    
//get references to the elements
var player = document.getElementById("player");
var btn = document.getElementById("video-btn");
var curtime = document.getElementById("curtime");
var duration = document.getElementById("duration");

//attach event handler to button
EventUtil.addHandler(btn, "click", function(event){
    if (player.paused){
        player.play();
        btn.value = "Pause";
    } else {
        player.pause();
        btn.value = "Play";
    }
});

//initialize the UI when loaded
EventUtil.addHandler(player, "load", function(event){
    duration.innerHTML = player.duration;
});

//update the current time periodically
setInterval(function(){
    curtime.innerHTML = player.currentTime;
}, 250);    
    
    
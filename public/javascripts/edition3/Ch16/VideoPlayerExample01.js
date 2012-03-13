//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch16/VideoPlayerExample01.htm
//Custom Video Player Example
window.onload = function(){
    
    //get references to the elements
    var player = document.getElementById("player");
    var btn = document.getElementById("video-btn");
    var curtime = document.getElementById("curtime");
    var duration = document.getElementById("duration");
    duration.innerHTML = player.duration;            
    
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
    
    //update the current time periodically
    setInterval(function(){
        curtime.innerHTML = player.currentTime;
    }, 250);    
    
};
    
    
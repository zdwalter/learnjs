//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch23/OnlineEventsExample01.htm
//Online Events Exampledocument.write(navigator.onLine ? "Online" : "Offline");
EventUtil.addHandler(window, "online", function(){
    document.getElementById("status").innerHTML = "Online";
});
EventUtil.addHandler(window, "offline", function(){
    document.getElementById("status").innerHTML = "Offline";
});
    
//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch16/HistoryStateManagementExample01.htm
//History State Management Example
    (function(){
var btn1 = document.getElementById("btn1"),
    btn2 = document.getElementById("btn2"),
    btn3 = document.getElementById("btn3"),
    username = document.getElementById("username"),
    lastBtn;
    
function handleClick(event){
    var target = EventUtil.getTarget(event),
        state = null;
    
    if (target.className != "current"){
        switch(target.id){
            case "btn1":
                state = { name: "Nicholas", btnId: target.id };
                history.pushState(state, "Nicholas' page", "nicholas.html");
                break;
            
            case "btn2":
                state = { name: "Greg", btnId: target.id };
                history.pushState(state, "Greg's page", "greg.html");
                break;
                
            case "btn3":
                state = { name: "Michael", btnId: target.id };
                history.pushState(state, "Michael's page", "michael.html");
                break;
        }
        setStateButton(target.id);
        updateUsername(state.name);
    }
}

function updateUsername(name){
    username.innerHTML = name;
}

function setStateButton(btnId){
    var newBtn = document.getElementById(btnId);
    if (lastBtn){
        lastBtn.className = "";
        lastBtn = null;
    }
    
    if (newBtn){
        newBtn.className = "current";
        lastBtn = newBtn;
    }
}
    
EventUtil.addHandler(btn1, "click", handleClick);
EventUtil.addHandler(btn2, "click", handleClick);
EventUtil.addHandler(btn3, "click", handleClick);

EventUtil.addHandler(window, "popstate", function(event){
    var state = event.state;
    if (state){
        updateUsername(state.name);
        setStateButton(state.btnId);
    } else {
        updateUsername("");
        setStateButton("");
    }
    
});
    })();        
    
//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch13/EventDelegationExample01.htm
//Event Delegation Example
    (function(){
var list = document.getElementById("myLinks");

EventUtil.addHandler(list, "click", function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    switch(target.id){
        case "doSomething":
            document.title = "I changed the document's title";
            break;

        case "goSomewhere":
            location.href = "http://www.wrox.com";
            break;

        case "sayHi":
            print("hi");
            break;
    }
});

    })();
    
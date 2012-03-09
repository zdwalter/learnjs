//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch18/EventTargetExample.htm
//Event Target Example

function handleMessage(event){
    print("Message received: " + event.message);
}

var target = new EventTarget();

target.addHandler("message", handleMessage);

target.fire({ type: "message", message: "Hello world!"});

target.removeHandler("message", handleMessage);

target.fire({ type: "message", message: "Hello world!"});


    
//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch22/EventTargetExample02.htm
//Event Target Example
function object(o){
    function F(){}
    F.prototype = o;
    return new F();
}
    
function inheritPrototype(subType, superType){
    var prototype = object(superType.prototype);   //create object
    prototype.constructor = subType;               //augment object
    subType.prototype = prototype;                 //assign object
}

function Person(name, age){
    EventTarget.call(this);
    this.name = name;
    this.age = age;
}

inheritPrototype(Person,EventTarget);

Person.prototype.say = function(message){
    this.fire({type: "message", message: message});
};



function handleMessage(event){
    print(event.target.name + " says: " + event.message);
}

var person = new Person("Nicholas", 29);

person.addHandler("message", handleMessage);

person.say("Hi there.");

    
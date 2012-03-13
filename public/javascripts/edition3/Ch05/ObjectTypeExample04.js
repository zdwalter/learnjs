//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch05/ObjectTypeExample04.htm
//Object Type Example 4
function displayInfo(args) {
    var output = "";

    if (typeof args.name == "string"){
        output += "Name: " + args.name + "\n";
    }

    if (typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }

    print(output);
}

displayInfo({ 
    name: "Nicholas", 
    age: 29
});

displayInfo({
    name: "Greg"
});


    
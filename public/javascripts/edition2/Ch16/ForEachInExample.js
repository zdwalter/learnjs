//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/ForEachInExample.htm
//for each-in Example
    
var employees =  <employees name="something">
                    <employee position="Software Engineer">
                        <name>Nicholas C. Zakas</name>
                    </employee>
                    <employee position="Salesperson">
                        <name>Jim Smith</name>
                    </employee>
                </employees>;
                
for each (var child in employees){
    print(child);
}

var colors = ["red","green","blue"];
for each(var color in colors){
    print(color);
}

    
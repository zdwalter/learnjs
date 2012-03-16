//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch19/ForEachInExample01.htm
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

    
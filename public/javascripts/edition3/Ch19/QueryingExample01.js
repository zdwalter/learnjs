//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch19/QueryingExample01.htm
//Querying Example
    
var employees =  <employees>
                    <employee position="Software Engineer">
                        <name>Nicholas C. Zakas</name>
                    </employee>
                    <employee position="Salesperson">
                        <name>Jim Smith</name>
                    </employee>
                </employees>;
                
var cats = employees.cat;
print(cats.length());     //0 

var allDescendants = employees..*;     //get all descendants of <employees/>
print(allDescendants);

var employees2 = employees.employee.parent();

print(employees.contains(employees2));
    
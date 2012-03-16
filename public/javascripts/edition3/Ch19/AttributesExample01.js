//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch19/AttributesExample01.htm
//Attributes Example
    
var employees =  <employees>
                    <employee position="Software Engineer">
                        <name>Nicholas C. Zakas</name>
                    </employee>
                    <employee position="Salesperson">
                        <name>Jim Smith</name>
                    </employee>
                </employees>;
                
print(employees.employee[0].@position);
print(employees.employee[0].child("@position"));
print(employees.employee[0].attribute("position"));

employees.employee[0].@name = "manager";
print(employees.employee[0].toXMLString());

delete employees.employee[0].@position;
print(employees.employee[0].toXMLString());

    
//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/XMLListTypeExample3.htm
//XMLList Type Example
    
var employees =  <employees>
                    <employee position="Software Engineer">
                        <name>Nicholas C. Zakas</name>
                    </employee>
                    <employee position="Salesperson">
                        <name>Jim Smith</name>
                    </employee>
                </employees>;
                
print(employees.employee.length());
print(employees.employee[0].name);

print(employees.length());          //1
print(employees[0] === employees);  //true


    
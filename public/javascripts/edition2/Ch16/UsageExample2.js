//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/UsageExample2.htm
//Usage Example
    
var employees =  <employees>
                    <employee position="Software Engineer">
                        <name>Nicholas C. Zakas</name>
                    </employee>
                    <employee position="Salesperson">
                        <name>Jim Smith</name>
                    </employee>
                </employees>;
                
print(employees.child("*"));
print(employees.child("*")[0].name);

    
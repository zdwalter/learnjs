//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/XMLListTypeExample2.htm
//XMLList Type Example
    
var employees =  <employee position="Software Engineer">
                        <name>Nicholas C. Zakas</name>
                    </employee> +
                    <employee position="Salesperson">
                        <name>Jim Smith</name>
                    </employee>;
                
print(employees.length());
print(employees[0].name);
print(employees.toXMLString());

    
//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/XMLTypeExample.htm
//XML Type Example
    
var employee =  <employee position="Software Engineer">
                    <name>Nicholas C. Zakas</name>
                </employee>;
print(employee.@position);
print(employee.name);

    
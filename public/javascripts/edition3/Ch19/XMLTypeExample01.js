//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch19/XMLTypeExample01.htm
//XML Type Example
    
var employee =  <employee position="Software Engineer">
                    <name>Nicholas C. Zakas</name>
                </employee>;
print(employee.@position);
print(employee.name);

    
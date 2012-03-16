//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch19/XMLConstructionExample02.htm
//XML Construction Example
    
var employees = <employees/>;
employees.employee.name = "Nicholas C. Zakas";
employees.employee.@position = "Software Engineer";

employees.employee +=   <employee position="Salesperson">
                            <name>Jim Smith</name>
                        </employee>;

print(employees.toXMLString());

    
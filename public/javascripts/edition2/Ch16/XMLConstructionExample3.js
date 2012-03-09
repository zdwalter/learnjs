//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch16/XMLConstructionExample3.htm
//XML Construction Example
    
var employees = <employees>
    <employee position="Software Engineer">
        <name>Nicholas C. Zakas</name>
    </employee>
    <employee position="Salesperson">
        <name>Jim Smith</name>
    </employee>
</employees>;

employees.appendChild(<employee position="Vice President">
                     <name>Benjamin Anderson</name>
                 </employee>);

employees.prependChild(<employee position="User Interface Designer">
                     <name>Michael Johnson</name>
                  </employee>);

employees.insertChildBefore(employees.child(2), 
                            <employee position="Human Resources Manager">
                                <name>Margaret Jones</name>
                            </employee>);

employees.setChildren(<employee position="President">
                         <name>Richard McMichael</name>
                      </employee> +
                      <employee position="Vice President">
                          <name>Rebecca Smith</name>
                      </employee>);


print(employees.toXMLString());

    
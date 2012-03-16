//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch06/GetPropertyDescriptorExample01.htm
//Get Property Descriptor Example

var book = {};

Object.defineProperties(book, {
    _year: {
        value: 2004
    },
    
    edition: {
        value: 1
    },
    
    year: {            
        get: function(){
            return this._year;
        },
        
        set: function(newValue){
            if (newValue > 2004) {
                this._year = newValue;
                this.edition += newValue - 2004;
            }                  
        }            
    }        
});
   
var descriptor = Object.getOwnPropertyDescriptor(book, "_year");
print(descriptor.value);          //2004
print(descriptor.configurable);   //false
print(typeof descriptor.get);     //"undefined"

var descriptor = Object.getOwnPropertyDescriptor(book, "year");
print(descriptor.value);          //undefined
print(descriptor.enumerable);     //false
print(typeof descriptor.get);     //"function"


    
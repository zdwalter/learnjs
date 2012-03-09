//https://github.com/nzakas/professional-javascript/blob/master/edition2/Ch07/ModulePatternExample.htm
//Module Pattern Example

    function BaseComponent(){
    }
    
    function OtherComponent(){
    }

    var application = function(){
    
        //private variables and functions
        var components = new Array();
    
        //initialization
        components.push(new BaseComponent());
    
        //public interface
        return {
            getComponentCount : function(){
                return components.length;
            },
    
            registerComponent : function(component){
                if (typeof component == "object"){
                    components.push(component);
                }
            }
        };
    }();

    application.registerComponent(new OtherComponent());
    print(application.getComponentCount());  //2

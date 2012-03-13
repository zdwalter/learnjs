//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/ModulePatternExample01.htm
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

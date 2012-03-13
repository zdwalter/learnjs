//https://github.com/nzakas/professional-javascript/blob/master/professional-javascript3/Ch07/ModuleAugmentationPatternExample01.htm
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
    
        //create a local copy of application
        var app = new BaseComponent();
    
        //public interface
        app.getComponentCount = function(){
            return components.length;
        };
    
        app.registerComponent = function(component){
            if (typeof component == "object"){
                components.push(component);
            }
        };
    
        //return it
        return app;
    }();

    print(application instanceof BaseComponent);
    application.registerComponent(new OtherComponent());
    print(application.getComponentCount());  //2

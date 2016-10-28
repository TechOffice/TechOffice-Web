requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app'
    }
});

define(function(require){
    module1 = require("app/module1");
    module2 = require("app/module2");
    console.log(module1.name)
    console.log(module1.name)
    var messageDiv = document.querySelector("#messageDiv");
    var message = "module1.name : " + module1.name ;
    message = message + "<br/>";
    message = message + "module2.name : " + module2.name ;
    messageDiv.innerHTML = message;
});
# RequireJs Example

## RequireJs
It is a library for aychronous module definition.

## Example
main.js
```
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
```

app/module1.js
```
define(function(require){
    console.log("calling define module1");
    var main = {name: "module1"};
    return main;
});
```

app/module2.js
```
define(function(require){
    console.log("calling define module2");
    var main = {name: "module2"};
    return main;
});
```
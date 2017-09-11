# AngularJs 1x Example

AngularJS is a framework for web apps which use HTML as Template langauage and extends HTML syntax. It provide the data binding and dependency injection which can help you when develop web application.

* Data Binding
* Dependency Injection

# Example

* SimpleAnagularJsExample
* Hello World Example
* Controller Example
* Component Example
* File Structure Example

# Data Binding

AngularJS provide the feature of Two-Way Data Binding which make it different from the classical template system. Two-Way Data Binding is the automatic synchronization of data between model and view compoent. In AngularJS, model is specifed as variable in controller.

javascript 
```
var app = angular.module("app", []);
app.controller('techofficeController', ['$scope', function($scope){
  // controller code
  $scope.test = "Testing";
}]);
```

html
```
{{test}}
```

# Dependency Inject 

AngularJs is a Dependency Inject Framework. 

```
var test = angular.module("test", []);
test.factory("testService1", function() {
	var message = "Testing";
	
	return {
		getMessage: function(){
			return message;
		}
	};
});

// after declaring testService1 as above, it can be inject to other service
test.factory("testService2", function(testService1){
	
	return function(){
		console.log(testService.getMessage());
	};
});

```

# Components

* Template
* Controller
* Component
* Service
* Component Router
* Animation
* Modules
* HTML Compiler
* Provider
* Decorators
* Booststrap


# AngularJs 1x Example

AngularJs is a framework for dynamic web apps. It could help the data binding and dependency inject for web application development.

# Example

* SimpleAnagularJsExample
	* Hello World Example
	* Controller Example
	* Component Example
	* File Structure Example

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

## Template

## Service
AngularJS Service is an object that can be wired using Dependency Injection (DI).
	* Lazily instantiated
	* Singleton
	
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
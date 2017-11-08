# Simple AngularJs Example

## Dependencies
* CDN provider of AngualrJs: https://ajax.googleapis.com/ajax/libs/angularjs/1.5.8/angular.min.js
* AngularJs: 1.5.8

## Example List
* HelloWorld.html - Hello World Example
* SimpleControllerExample.html - Controller Example 
* SimpleComponentExample.html - Component Example
* app/simpleAngularJsExample.html - Separated Folder and File Organization Example

## HelloWorld.html
Hello World Example of AngularJs

## SimpleControllerExample.html
Define a controller
```
var testApp = angular.module('testApp', []);
// define TestController on phonecatApp
testApp.controller('TestController', function TestController($scope) {
    $scope.name = "Test Controller";
    $scope.data = [
        {
            'name' : 'name 1',
            'value' : 'value 1'
        }, 
        {
            'name' : 'name 2',
            'value' : 'value 2'
        }
    ];
});
```
Apply the controler to the html element
```
 <body ng-controller="TestController">
     <p>
         {{name}}
     </p>
    <table border="1">
        <tr>
            <th>Name</th>
            <th>Value</th>
        </tr>
        <tr ng-repeat="row in data">
            <td>{{row.name}}</td>
            <td>{{row.value}}</td>
        </tr>
     </table>
 </body>
```

## SimpleComponentExample.html
Define a component
```
angular.module('myApp', []);
/**
    * Define myApp as Module and testComponent as Compoent
    * with template and controller
    */
angular.module("myApp").component('testComponent',{
    template: "Hello, {{$ctrl.value}}",
    controller: function testComponentController() {
        this.value = "world";
    }
});
```

Use the component in body
```
<test-component></test-component>
```

## app/simpleAngularJsExample.html
Use separated files and folder to define module, component.
```
<script src="app.module.js"></script>
<script src="test/test.module.js"></script>
<script src="test/test.component.js"></script>
```
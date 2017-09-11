// It register test componet to test modules
angular.module('test').component('test', {
    template: "{{$ctrl.value}}",
    controller: function TestController(){
        this.value = "Simple AngaularJs Example";
    }
});

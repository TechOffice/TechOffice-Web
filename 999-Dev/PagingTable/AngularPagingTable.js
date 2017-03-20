var testApp = angular.module('testApp', []);
// define TestController on phonecatApp
testApp.controller('TestController', function TestController($scope) {
	$scope.name = "Test Two-way Data Binding";
	$scope.queryStr = "";
	$scope.data = [
		{
			'name' : 'name 1',
			'value' : 'value 1'
		}, 
		{
			'name' : 'name 2',
			'value' : 'value 2'
		}, 
		{
			'name' : 'name 3',
			'value' : 'value 3'
		}, 
		{
			'name' : 'name 33',
			'value' : 'value 33'
		}, 
		{
			'name' : 'name 4',
			'value' : 'value 4'
		}, 
		{
			'name' : 'name 5',
			'value' : 'value 5'
		}
	];
	$scope.filteredData = $scope.data;
	$scope.query = function(){
		if (this.queryStr != ''){
			this.filteredData = [];
			for (var i=0; i<this.data.length; i++){
				var item = this.data[i];
				if (item.name.includes(this.queryStr)){
					this.filteredData.push(item);
				}
			}
		}else{
			this.filteredData = this.data;
		}
	}
});
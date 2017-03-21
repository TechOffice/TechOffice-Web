angular.module('testApp', []).component('angularTable', {
	templateUrl: "AngularPagingTableTemplate.html",
	controller: function($scope){
		$scope.labels = ['Name', 'Value'],
		$scope.columns = ['name', 'value'],
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
	}
});
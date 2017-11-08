var testApp = angular.module('testApp', []);
testApp.filter('range', function(){
	return function(input, total){
		total = parseInt(total);
		for (var i=1; i<total+1; i++){
			input.push(i);
		}
		return input;
	};
});
testApp.component('angularTable', {
	templateUrl: "AngularPagingTableTemplate.html",
	controller: function($scope){
		$scope.labels = ['Name', 'Value'],
		$scope.columns = ['name', 'value'],
		$scope.pageCount = 20,
		$scope.currentPage = 1,
		$scope.selected;
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
		$scope.search = function(value, column) {
			debugger;
		};
		$scope.detail = {};
		$scope.showDetail = function(row, index){
			$scope.selected = row;
			$scope.selected.index = index;
		};
		$scope.update = function(){
			$scope.columns.forEach(function(item, index, arr){
				if ($scope.detail[item]){
					$scope.data[$scope.selected.index][item] = $scope.detail[item];
				}
			});
		}
	}
});
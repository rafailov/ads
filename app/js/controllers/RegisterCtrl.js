app.controller('RegisterCtrl',['$scope','townsData','$log', function($scope, townsData, $log) {

	townsData.getTowns(function(data){$scope.towns = data;});

	$scope.register = function(user){
		console.log(user);
	}


}]);
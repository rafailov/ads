app.controller('RegisterCtrl',['$scope','townsData', 'UserData','$log', function($scope, townsData, UserData, $log) {

	townsData.getTowns(function(data){$scope.towns = data;});

	$scope.register = function(user){
		UserData.registerUser(user);
	}


}]);
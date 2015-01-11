app.controller('PublishCtrl',['$scope', 'UserData', function($scope, UserData) {
	$scope.login = function (user){
		UserData.loginUser(user);
	}
}]);
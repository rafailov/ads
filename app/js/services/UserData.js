app.factory('UserData', ['$http',  '$location', 'authentication', 'baseServiceUrl', '$log', function ($http, $location, authentication, baseServiceUrl, $log) {

	function registerUser(user){
		$http({
			method: 'POST',
			url: baseServiceUrl + 'user/register',
			data: user
		}).success(function(data,status,headers,config){

			authentication.saveUser(angular.toJson(data));
			$location.path('/');

		}).error(function(data,status,headers,config){
			$log.warn(data);//TODO
		})
	}
		function loginUser(user){
		$http({
			method: 'POST',
			url: baseServiceUrl + 'user/login',
			data: user
		}).success(function(data,status,headers,config){

			authentication.saveUser(angular.toJson(data));
			$location.path('/');
			
		}).error(function(data,status,headers,config){
			$log.warn(data);//TODO
		})
	}
		function logoutUser(user){
		$http({
			method: 'POST',
			url: baseServiceUrl + 'user/logout',
			data: user
		}).success(function(data,status,headers,config){

			authentication.clearHeaders();
			
		}).error(function(data,status,headers,config){
			$log.warn(data);//TODO
		})
	}
	return {
		registerUser:registerUser,
		loginUser:loginUser,
		logoutUser:logoutUser
	}
}])
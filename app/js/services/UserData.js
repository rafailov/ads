app.factory('UserData', ['$http', 'authentication', '$log', function ($http, authentication, $log) {

	function registerUser(user){
		$http({
			method: 'POST',
			url: 'http://softuni-ads.azurewebsites.net/api/user/register',
			data: user
		}).success(function(data,status,headers,config){

			authentication.saveUser(angular.toJson(data));

		}).error(function(data,status,headers,config){
			$log.warn(data);//TODO
		})
	}
		function loginUser(user){
		$http({
			method: 'POST',
			url: 'http://softuni-ads.azurewebsites.net/api/user/login',
			data: user
		}).success(function(data,status,headers,config){

			authentication.saveUser(angular.toJson(data));
			
		}).error(function(data,status,headers,config){
			$log.warn(data);//TODO
		})
	}
		function logoutUser(user){
		$http({
			method: 'POST',
			url: 'http://softuni-ads.azurewebsites.net/api/user/logout',
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
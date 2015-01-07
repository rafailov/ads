app.factory('userData', ['$http', '$log', function ($http,$log) {

	function registerUser(user){
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/towns'
		}).success(function(data,status,headers,config){
			success(data);
		}).error(function(data,status,headers,config){
			$log.warn(data);
		})
	}
		function loginUser(user){
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/towns'
		}).success(function(data,status,headers,config){
			success(data);
		}).error(function(data,status,headers,config){
			$log.warn(data);
		})
	}
		function logoutUser(user){
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/towns'
		}).success(function(data,status,headers,config){
			success(data);
		}).error(function(data,status,headers,config){
			$log.warn(data);
		})
	}
	return {
		registerUser:registerUser,
		loginUser:loginUser,
		logoutUser:logoutUser
	}])
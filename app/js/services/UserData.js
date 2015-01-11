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
			$location.path('/');
			
		}).error(function(data,status,headers,config){
			$log.warn(data);//TODO
		})
	}
	function getUserProfile (success) {
		$http({
			method: 'GET',
			headers: authentication.getHeaders(),
			url: baseServiceUrl + 'user/profile'
		}).success(function(data,status,headers,config){

			success(data);
			
		}).error(function(data,status,headers,config){
			$log.warn(data);//TODO
		})
	}
	function updateUserProfile (name, email, phoneNumber, townId) {
		$http({
			method: 'PUT',
			headers: authentication.getHeaders(),
			url: baseServiceUrl + 'user/profile',
			data: {'name': name, 'email': email, 'phoneNumber': phoneNumber, 'townId': townId, }
		}).success(function(data,status,headers,config){

			alert("Your profile was edit successful");
			$location.path('/');
			
		}).error(function(data,status,headers,config){
			$log.warn(data);//TODO
		})
	}

	function changePassword (oldPassword, newPassword, confirmPassword) {
		$http({
			method: 'DELETE',
			headers: authentication.getHeaders(),
			url: baseServiceUrl + 'user/changePassword',
			data: {'oldPassword': oldPassword, 'newPassword': newPassword, 'confirmPassword': confirmPassword }
		}).success(function(data,status,headers,config){

			alert("Your password was edit successful");
			$location.path('/');
			
		}).error(function(data,status,headers,config){
			$log.warn(data);//TODO
		})
	}
	return {
		registerUser:registerUser,
		loginUser:loginUser,
		getUserProfile:getUserProfile,
		updateUserProfile:updateUserProfile,
		changePassword:changePassword,
		logoutUser:logoutUser
	}
}])
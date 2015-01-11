app.factory('authentication', function () {
	
	function saveUserAccess(data){
		localStorage.setItem('user', data)
	}

	function getUserAccess(){
		return angular.fromJson(localStorage.user);
	}

	function getHeaders(argument){
		var headers = {};
		var userData = getUserAccess();
		if (userData) {
			headers.Authorization = 'Bearer ' + userData.access_token;
		}else{
			return false;
		}
		return headers;
	}

	function getUserName() {
		var userData = getUserAccess();
		if (userData) {
			return userData.username;
		}else{
			return false;
		}
	}

	function clearHeaders(){
		localStorage.clear();
	}

	function isAdmin(){
		var userData = getUserAccess();
		if (userData) {
			return angular.fromJson(localStorage.user).isAdmin;
		}
	}
	return{
		saveUser: saveUserAccess,
		getUser: getUserAccess,
		getHeaders:getHeaders,
		clearHeaders:clearHeaders,
		isAdmin:isAdmin,
		getUserName:getUserName
	}
})
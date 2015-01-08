app.factory('authentication', function () {
	
	function saveUserAccess(data){
		localStorage.setItem('user', data)
	}

	function getUserAccess(){
		return angular.fromJson(localStorage.user);
	}

	function getHeaders(argument){
		var headers = {};
		var userData = getUser();
		if (userData) {
			headers.Authorization = 'Bearer ' + userData.access_token;
		};
		return headers;
	}

	function clearHeaders(){

	}

	function isAdmin(){
		var userData = getUser();
		if (userData) {
			return angular.fromJson(localStorage.user).isAdmin;
		}
	}
	return{
		saveUser: saveUserAccess,
		getUser: getUserAccess,
		getHeaders:getHeaders,
		clearHeaders:clearHeaders,
		isAdmin:isAdmin
	}
})
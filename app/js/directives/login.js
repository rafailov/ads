app.directive('loginForm',function () {
	return{
		controller: 'Login',
		restrict: 'E',
		templateUrl: 'templates/loginForm.html',
		replace:true
	}
})
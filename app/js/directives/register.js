app.directive('registerForm',function () {
	return{
		controller: 'RegisterCtrl',
		restrict: 'E',
		templateUrl: 'templates/registerForm.html',
		replace:true
	}
})
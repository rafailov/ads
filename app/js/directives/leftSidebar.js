app.directive('leftPublicSidebar',function () {
	return{
		controller: 'HomeCtrl',
		restrict: 'E',
		templateUrl: 'templates/leftLoginSidebar.html',
		replace:true
	}
})
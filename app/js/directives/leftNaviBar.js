app.directive('leftNaviBar',function () {
	return{
		controller: 'HomeCtrl',
		restrict: 'E',
		templateUrl: 'templates/leftNaviBar.html',
		replace:true
	}
})
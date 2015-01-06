app.directive('publicAds',function () {
	return{
		controller: 'HomeCtrl',
		restrict: 'E',
		templateUrl: 'templates/ads.html',
		replace:true
	}
})
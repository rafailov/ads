app.directive('userAds',function () {
	return{
		controller: 'UserAdsCtrl',
		restrict: 'E',
		templateUrl: 'templates/usersAds.html',
		replace:true
	}
})
app.directive('publishAds',function () {
	return{
		controller: 'PublishCtrl',
		restrict: 'E',
		templateUrl: 'templates/addAds.html',
		replace:true
	}
})
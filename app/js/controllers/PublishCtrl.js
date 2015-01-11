app.controller('PublishCtrl',['$scope', 'authentication', 'UserData', 'adsData', 'categoryData', 'townsData', '$location', function($scope,authentication, UserData, adsData, categoryData, townsData, $location) {
	$scope.isLoggedIn = false;
	if (authentication.getHeaders()) {
		$scope.isLoggedIn = true;	
		$scope.username = authentication.getUserName();
	}else{
		$location.path('/');
	}
	categoryData.getCategories(function(data){$scope.categories = data;});

	townsData.getTowns(function(data){$scope.towns = data;});
	$scope.cancel = function () {
		$location.path('/');
	}

	$scope.publishAd = function(ad) {
		adsData.piblishNewAd(ad, function(data) {
			alert('obqvata beshe publicuvana uspeshno');
			$location.path('/');
		})
	}
}]);
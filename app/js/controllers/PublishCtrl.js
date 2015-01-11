app.controller('PublishCtrl',['$scope', 'UserData', 'adsData', 'categoryData', 'townsData', '$location', function($scope, UserData, adsData, categoryData, townsData, $location) {

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
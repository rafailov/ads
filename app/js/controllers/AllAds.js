app.controller('AllAds', function($scope, adsData, $log) {
		adsData.getAll(function(resp){
			$scope.data = resp;
		})
	});
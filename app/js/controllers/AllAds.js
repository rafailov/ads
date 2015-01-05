app.controller('AllAds', function($scope, adsData, $log) {
		var startPage = 2;
		adsData.getAll(function(resp){$scope.data = resp;}, startPage);
	});
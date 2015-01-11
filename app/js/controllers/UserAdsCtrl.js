app.controller('UserAdsCtrl',['$scope','adsData', 'authentication', '$location', '$log', function($scope, adsData, authentication,$location, $log) {
		$scope.isLoggedIn = false;
		if (authentication.getHeaders()) {
			$scope.isLoggedIn = true;
		}else{
			$location.path('/');
		}
		$scope.currentPage = 1;
		$scope.startPage = 1;
		$scope.pageSize = adsData.returnPageSize();
		$scope.username = authentication.getUserName();
		$scope.ready = false;
		$scope.pageChanged = function (clickedPage) {
			loadUserAds(clickedPage);
		}

		function loadUserAds(startPage){
			adsData.getUserAds(startPage || 1, function(data){
				$scope.adsData = data; 
				$scope.ready = true;
			});
		}
		loadUserAds(1);

	}]);
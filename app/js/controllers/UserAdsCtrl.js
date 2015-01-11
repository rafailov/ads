app.controller('UserAdsCtrl',['$scope','adsData', 'authentication', '$log', function($scope, adsData, authentication, $log) {
		loadUserAds();

		$scope.currentPage = 1;
		$scope.startPage = 1;
		$scope.pageSize = adsData.returnPageSize();
		$scope.username = authentication.getUserName();
		$scope.ready = false;
		$scope.isLoggedIn = false;
		$scope.pageChanged = function (clickedPage) {
			loadUserAds(clickedPage);
		}

		if (authentication.getHeaders()) {
			$scope.isLoggedIn = true;
		};
		function loadUserAds(startPage){
			adsData.getUserAds(startPage || 1, function(data){
				$scope.adsData = data; 
				$scope.ready = true;
			});
		}


	}]);
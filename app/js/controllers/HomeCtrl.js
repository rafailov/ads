app.controller('HomeCtrl',['$scope','adsData','townsData','categoryData', 'authentication', '$log', function($scope, adsData,townsData,categoryData, authentication, $log) {

		var selectedCategory = null;
		var selectedTown = null;

		loadAds();

		$scope.currentPage = 1;
		$scope.startPage = 1;
		$scope.pageSize = adsData.returnPageSize();
		$scope.username = authentication.getUserName();
		$scope.ready = false;
		$scope.isLoggedIn = false;
		$scope.pageChanged = function (clickedPage) {
			loadAds(clickedPage);
		}

		if (authentication.getHeaders()) {
			$scope.isLoggedIn = true;
		};
		function loadAds(startPage){
			adsData.getAll(startPage || 1, selectedCategory,selectedTown, function(data){
				$scope.adsData = data; 
				$scope.ready = true;
			});
		}

		categoryData.getCategories(function(data){$scope.categories = data;});

		townsData.getTowns(function(data){$scope.towns = data;});

		$scope.setCategoryFilter = function(row) { 
			$scope.selectedCat = row;
			selectedCategory = row + 1;
			loadAds();
      	};

      	$scope.setTownFilter = function(row){
			$scope.selectedTown = row;
			selectedTown = row + 1;
			loadAds();
      	}

	}]);
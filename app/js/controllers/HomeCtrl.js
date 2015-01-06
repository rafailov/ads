app.controller('HomeCtrl', function($scope, adsData, $log) {
		var startPage = 1;
		var selectedCategory = null;
		var selectedTown = null;

		loadAds();
		function loadAds(){
			adsData.getAll(function(resp){$scope.data = resp;}, startPage, selectedCategory,selectedTown);
		}

		adsData.getCategories(function(resp){$scope.categories = resp;});

		adsData.getTowns(function(resp){$scope.towns = resp;});

		$scope.setCategoryFilter = function(row) { 
			$scope.selectedCat = row;
			selectedCategory = row + 1;
			loadAds();
			//$log.warn(selectedCategory);
      	};

      	$scope.setTownFilter = function(row){
			$scope.selectedTown = row;
			selectedTown = row + 1;
			loadAds();
      	}

	});
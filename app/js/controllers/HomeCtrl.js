app.controller('HomeCtrl',['$scope','adsData','townsData','categoryData','$log', function($scope, adsData,townsData,categoryData, $log) {
		var startPage = 1;
		var selectedCategory = null;
		var selectedTown = null;

		loadAds();
		function loadAds(){
			adsData.getAll(function(data){$scope.data = data;}, startPage, selectedCategory,selectedTown);
		}

		categoryData.getCategories(function(data){$scope.categories = data;});

		townsData.getTowns(function(data){$scope.towns = data;});

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

	}]);
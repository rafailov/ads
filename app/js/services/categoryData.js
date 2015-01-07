app.factory('categoryData', ['$http', '$log', function ($http,$log) {

	function getCategories(success){
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/categories'
		}).success(function(data,status,headers,config){
			success(data);
		}).error(function(data,status,headers,config){
			$log.warn(data);
		})
	}

	return {
		getCategories: getCategories
	}
}]);
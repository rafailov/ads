app.factory('categoryData', ['$http', 'baseServiceUrl', '$log', function ($http, baseServiceUrl, $log) {

	function getCategories(success){
		$http({
			method: 'GET',
			url: baseServiceUrl + 'categories'
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
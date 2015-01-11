app.factory('adsData',['$http', 'baseServiceUrl', '$log', function ($http, baseServiceUrl, $log) {

	function getAllAds(pageNumber, categoryId, townId, success) {
		var url = baseServiceUrl + 'ads/?pageSize=5&startPage=' + pageNumber;
		if (categoryId) {
			url += '&CategoryId='+ categoryId;
		};
		if (townId) {
			url += '&TownId=' + townId;
		};
		$http({
			method:'GET',
			url:url
		}).success(function(data,status,headers,config){
			success(data);
		}).error(function(data,status,headers,config){
			$log.warn(data);
		})
	}

	return {
		getAll: getAllAds
	}
}]);
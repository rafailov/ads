app.factory('adsData',['$http', 'baseServiceUrl', 'authentication', '$log', function ($http, baseServiceUrl, authentication, $log) {

	function returnPageSize () {
		return 7	
	}

	function getAllAds(pageNumber, categoryId, townId, success) {
		var url = baseServiceUrl + 'ads/?pageSize=' + returnPageSize() + '&startPage=' + pageNumber;
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

	function getUserAds(pageNumber, success) {
		var url = baseServiceUrl + 'user/ads/?pageSize=' + returnPageSize() + '&startPage=' + pageNumber;
		$http({
			method:'GET',
			headers: authentication.getHeaders(),
			url:url
		}).success(function(data,status,headers,config){
			success(data);
		}).error(function(data,status,headers,config){
			$log.warn(data);
		})
	}

	function piblishNewAd(adParameters, success) {
		$http({
			method:'POST',
			url:baseServiceUrl + 'user/ads',
			data:adParameters,
			headers: authentication.getHeaders()
		}).success(function(data,status,headers,config){
			success(data);
		}).error(function(data,status,headers,config){
			$log.warn(data);
		})
	}

	return {
		getAll: getAllAds,
		piblishNewAd:piblishNewAd,
		getUserAds:getUserAds,
		returnPageSize : returnPageSize
	}
}]);
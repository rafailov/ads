app.factory('adsData', function ($http,$log) {

	function getAllAds(success, pageNumber) {
		$http({
			method:'GET',
			url:'http://softuni-ads.azurewebsites.net/api/ads/?pageSize=5&startPage=' + pageNumber
		}).success(function(data,status,headers,config){
			success(data);
		}).error(function(data,status,headers,config){
			$log.warn(data);
		})
	}

	return {
		getAll: getAllAds
	}
});
app.factory('adsData', function ($http,$log) {

	function getAllAds(success, pageNumber, categoryId, townId) {
		var url = 'http://softuni-ads.azurewebsites.net/api/ads/?pageSize=5&startPage=' + pageNumber;
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

	function getTowns(success){
		$http({
			method: 'GET',
			url: 'http://softuni-ads.azurewebsites.net/api/towns'
		}).success(function(data,status,headers,config){
			success(data);
		}).error(function(data,status,headers,config){
			$log.warn(data);
		})
	}
	return {
		getAll: getAllAds,
		getCategories: getCategories,
		getTowns:getTowns
	}
});
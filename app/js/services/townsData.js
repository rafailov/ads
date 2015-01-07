app.factory('townsData', function ($http,$log) {

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
		getTowns:getTowns
	}
});
app.factory('townsData',['$http', 'baseServiceUrl', '$log', function ($http, baseServiceUrl, $log) {

	function getTowns(success){
		$http({
			method: 'GET',
			url: baseServiceUrl + 'towns'
		}).success(function(data,status,headers,config){
			success(data);
		}).error(function(data,status,headers,config){
			$log.warn(data);
		})
	}
	return {
		getTowns:getTowns
	}
}]);
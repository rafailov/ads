app.directive('rightFilters',function () {
	return{
		controller: 'HomeCtrl',
		restrict: 'E',
		templateUrl: 'templates/filters.html',
		replace:true
	}
})
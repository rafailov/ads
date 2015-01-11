var app = angular.module('ads', ['ngRoute','ngResource', 'LocalStorageModule', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/login',{
		templateUrl: 'templates/loginPage.html'
	})
	$routeProvider.when('/register',{
		templateUrl: 'templates/registerPage.html'
	})
	$routeProvider.when('/',{
		controller: 'HomeCtrl',
		templateUrl: 'templates/homePage.html'
	})
	$routeProvider.when('/user/ads',{
		controller: 'UserAdsCtrl',
		templateUrl: 'templates/userAdsPage.html'//TODO
	})
	$routeProvider.when('/user/ads/publish',{
		templateUrl: 'templates/publishAdPage.html'
	})
	$routeProvider.when('/user/edit',{
		templateUrl: 'templates/editUserPage.html'//TODO
	})
	$routeProvider.otherwise({redirectTo: '/'})


}])


var app = angular.module('ads', ['ngRoute','ngResource', 'LocalStorageModule', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net/api/');

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/login',{
		templateUrl: 'templates/loginPage.html',
		controller: 'Login'
	})
	$routeProvider.when('/register',{
		templateUrl: 'templates/registerPage.html'
	})
	$routeProvider.when('/',{
		templateUrl: 'templates/homePage.html'
	})
	$routeProvider.when('/user/ads',{
		templateUrl: 'templates/homePage.html'//TODO
	})
	$routeProvider.when('/user/ads/publish',{
		templateUrl: 'templates/publishAdPage.html'
	})
	$routeProvider.when('/user/edit',{
		templateUrl: 'templates/homePage.html'//TODO
	})
	$routeProvider.otherwise({redirectTo: '/'})

	/*		<a href="#/user/ads">My Ads</a><br/>	
		<a href="#/user/ads/publish">Publish New Ad</a><br/>
		<a href="#/user/ads/edit">Edit Profile</a>*/
}])


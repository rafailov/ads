var app = angular.module('ads', ['ngRoute','ngResource', 'LocalStorageModule']);

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
	//$routeProvider.otherwise({redirectTo: '/'})

}])


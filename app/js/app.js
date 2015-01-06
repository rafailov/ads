var app = angular.module('ads', ['ngRoute','ngResource']);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/login',{
		templateUrl: 'templates/login.html',
		controller: 'Login'
	})
	$routeProvider.when('/register',{
		templateUrl: 'templates/register.html',
		controller: 'Register'
	})
	$routeProvider.when('/',{
		templateUrl: 'templates/homePage.html'
	})
}])


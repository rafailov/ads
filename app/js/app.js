var app = angular.module('ads', ['ngRoute','ngResource']);

app.config(function($routeProvider){
	$routeProvider.when('/login',{
		templateUrl: 'templates/login.html',
		controller: 'Login'
	})
	$routeProvider.when('/register',{
		templateUrl: 'templates/register.html',
		controller: 'Register'
	})
	$routeProvider.when('/',{
		templateUrl: 'templates/ads.html',
		controller: 'AllAds'
	})
})


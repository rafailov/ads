var app = angular.module('ads', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider.when('/#/login',{
		template: '<div style="color:red">SHOW</div>'
	}).otherwise({ redirectTo: '/'});
})


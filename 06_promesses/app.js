

var app = angular.module('myapp', ['ngRoute']);
app.config(function($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: '06_promesses/home.html', controller : 'PostController'})
		.when('/comments/:id', {templateUrl:'06_promesses/comments.html', controller: 'CommentsController'})
		.otherwise({redirectTo : '/'});
});



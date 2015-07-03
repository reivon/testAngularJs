
app.controller('PostController', ['$scope', '$rootScope', 'PostFactory', function ($scope, $rootScope, PostFactory) {
	$rootScope.loading = true;
	$scope.posts = PostFactory.getPosts().then(function(posts) {
		$scope.posts = posts;
		$rootScope.loading = false;
	}, function(msg) {
		alert(msg);
	});
}]);

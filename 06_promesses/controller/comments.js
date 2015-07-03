
app.controller('CommentsController', ['$scope', '$rootScope', 'PostFactory', '$routeParams', function ($scope, $rootScope, PostFactory, $routeParams) {
	
	$rootScope.loading = true;
	$scope.newComment = {};

	var post = PostFactory.getPost($routeParams.id).then(function(post) {
		$scope.title = post.name;
		$scope.comments = post.comments;
		$rootScope.loading = false;
	}, function(msg) {
		alert(msg);
	});

	$scope.addComment = function() {
		$scope.comments.push($scope.newComment);
		PostFactory.add($scope.newComment).then(function() {
			// TODO
		}, function() {
			alert('Votre message n\'a pas pu être sauvegardé');
		});
		$scope.newComment = {};
	};

}]);

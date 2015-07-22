angular.module('blog').controller('blogController', ['$scope', 'blogService', 'BlogModel', function ($scope, blogService, BlogModel) {
    var blogController = this;

    blogController.blogModel = new BlogModel();

    function applyRemoteData(posts) {
		blogController.blogModel.setPosts(posts.posts);
	}

    blogController.loadPosts = function () {
        blogService.getPosts().then(
				function( posts ) {
					applyRemoteData(posts);
				}
			);
    }

    blogController.loadPosts();
}]);
angular.module('blog').controller('blogController', ['$scope', 'blogService', 'BlogModel', '$routeParams', '$sce', function ($scope, blogService, BlogModel, $routeParams, $sce) {
    var blogController = this;

    blogController.blogModel = new BlogModel();
    $scope.id = $routeParams.id;

    blogController.loadPosts = function () {
        blogService.getPosts().then(
				function (response) {
				    for (var post in response.posts) {
                        response.posts[post].Content = $sce.trustAsHtml(response.posts[post].Content);
                    }
                    blogController.blogModel.setPosts(response.posts);
				}
			);
    }

    blogController.loadCategories = function () {
        blogService.getCategories().then(
				function (response) {
				    blogController.blogModel.setCategories(response.categories);
				}
			);
    }

    blogController.loadPosts();
    blogController.loadCategories();
} ]);
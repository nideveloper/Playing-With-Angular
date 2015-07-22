var blogApp = angular.module('blog', []);

blogApp.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

blogApp.factory('BlogModel', function () {
    return function () {
        this.posts = [];

        this.getPosts = function () {
            return this.posts;
        };

        this.setPosts = function (posts) {
            this.posts = posts;
        }
    };
});
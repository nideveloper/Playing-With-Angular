var blogApp = angular.module('blog');

blogApp.config(function($httpProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

blogApp.factory('BlogModel', function () {
    return function () {
        this.posts = [];
        this.categories = [];

        this.getPosts = function () {
            return this.posts;
        };

        this.getPostByID = function (id) {
            for (var postID in this.posts) {
                if (this.posts[postID].ID == id) {
                    return this.posts[postID];
                }
            }
            return [];
        }

        this.setPosts = function (posts) {
            this.posts = posts;
        }

        this.getCategories = function () {
            return this.categories;
        }

        this.setCategories = function (categories) {
            this.categories = categories;
        }
    };
});
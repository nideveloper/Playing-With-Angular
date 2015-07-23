'use strict';

/**
 * Main module of the application.
 */
angular
  .module('blog', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/blog', {
        templateUrl: 'views/blog/overview.html'
      })
      .when('/blog/post/:id', {
        templateUrl: 'views/blog/post.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var app = angular.module('blog', []);

    app.service("blogService", function($http, $q) {

			// Return public API.
			return({
				getPosts: getPosts,
                getTweets: getTweets
			});


			// ---
			// PUBLIC METHODS.
			// ---


			// I get all of the friends in the remote collection.
			function getPosts() {

				var request = $http({
					method: "get",
					url: "http://localhost:3000/api/posts",
					params: {
					}
				});

				return( request.then( handleSuccess, handleError ) );

			}

            function getTweets() {

				var request = $http({
					method: "get",
					url: "http://localhost:3000/twitter/nideveloper",
					params: {
					}
				});

				return( request.then( handleSuccess, handleError ) );

			}


			// ---
			// PRIVATE METHODS.
			// ---


			// I transform the error response, unwrapping the application dta from
			// the API response payload.
			function handleError( response ) {

				// The API response from the server should be returned in a
				// nomralized format. However, if the request was not handled by the
				// server (or what not handles properly - ex. server error), then we
				// may have to normalize it on our end, as best we can.
				if (
					! angular.isObject( response.data ) ||
					! response.data.message
					) {

					return( $q.reject( "An unknown error occurred." ) );

				}

				// Otherwise, use expected error message.
				return( $q.reject( response.data.message ) );

			}


			// I transform the successful response, unwrapping the application data
			// from the API response payload.
			function handleSuccess( response ) {

				return( response.data );

			}

		}
	);

    app.controller('blogController', function ($scope, blogService) {
        var blogController = this;

        blogController.posts = [];

        function applyRemoteData( posts ) {
			blogController.posts = posts.posts;
		}

        blogController.loadPosts = function () {
            blogService.getPosts().then(
					function( posts ) {
						applyRemoteData(posts);
					}
				);
        }

        blogController.loadPosts();
    });

    app.controller('tweetController', function ($scope, blogService) {
        var tweetController = this;

        tweetController.tweets = [];

        function applyRemoteData( tweets ) {
			tweetController.tweets = tweets;
		}

        tweetController.loadTweets = function () {
            blogService.getTweets().then(
					function( tweets ) {
						applyRemoteData(tweets);
					}
				);
        }

        tweetController.loadTweets();
    });
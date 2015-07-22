angular.module('blog').controller('tweetController', ['$scope','twitterService', 'TwitterModel', function ($scope, twitterService, TwitterModel) {
    var tweetController = this;

    tweetController.twitterModel = new TwitterModel();

    function applyRemoteData( tweets ) {
		tweetController.twitterModel.setTweets(tweets);
	}

    tweetController.loadTweets = function () {
        twitterService.getTweets().then(
				function( tweets ) {
					applyRemoteData(tweets);
				}
			);
    }

    tweetController.loadTweets();
}]);
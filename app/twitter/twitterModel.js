angular.module('blog').factory('TwitterModel', function () {
    return function () {
        this.tweets = [];

        this.getTweets = function () {
            return this.tweets;
        };

        this.setTweets = function (tweets) {
            this.tweets = tweets;
        }
    };
});
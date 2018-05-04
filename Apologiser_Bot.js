//Twitter Bot Craic
//All kudos go to Twit npm and the Coding Train

console.log("Bot is go!! Waiting for the selected user to Tweet...");

var Twit = require('twit');

var config = require('./config')
var T = new Twit(config)


var userId = 'INSERT_USERID';
//Get "userID" of twitter user from running Twitter_API_Search.js with "screen_name"
var stream = T.stream('statuses/filter', { follow: userId });
stream.on('tweet', GotTweet);

function GotTweet(tweet) {

    // Who sent the tweet?
    var name = tweet.user.screen_name;
    // the status update or tweet ID in which we will reply
    var nameID  = tweet.id_str;

    // Start a reply back to the sender
    var reply = "I'm sorry for my friend " + "@" + name + ' ';
    var params             = {
                              status: reply,
                              in_reply_to_status_id: nameID
                             };

    T.post('statuses/update', params, function(err, data, response) {
    	if (err !== undefined) {
        	console.log(err);
    	} else {
    		console.log('Tweeted: ' + params.status);
    	}
    })
};

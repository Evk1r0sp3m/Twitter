
//Twitter Bot craic
//All kudos go to Twit npm and the Coding Train

console.log("Bot is go!");

var Twit = require('twit');

var config = require('./config')
var T = new Twit(config)


// To post repeatedly after a number of miliseconds/ seconds/minutes:

setInterval(SendTweet, 1000*60*60)
This will tweet every; 
1000 miliseconds * 60 milliseconds (= 1 minute) * 60 miliseconds (= 1 hour)

To tweet 'hello world from node.js'

SendTweet();

function SendTweet() {
	
	var randomN = Math.floor(Math.random()*827)	

	var tweet = {
		status: randomN + ' Gerry is defintely a human'
	}
	T.post('statuses/update', tweet, tweeted);

	function tweeted (err, data, response) {
		console.log(data)
	}
}


// // To search twitter for all tweets containing the word 'crab' since July 11, 2011:

var params = {
	q: 'crab since:2013-10-06', 
	count: 3
};

T.get('search/tweets', params, GotData);  

function GotData(err, data, response) {
	console.log(data)
}


// To get the list of user id's that follow @Example_user:

T.get('followers/ids', { screen_name: 'Example_User' },  function (err, data, response) {
	console.log(data)
}

        
//The following can be used to pull data about specific user's tweets:

var userId = 'INSERT_USERID';
//Get "userID" of twitter user from running hello.js with "screen_name"
var stream = T.stream('statuses/filter', { follow: userId });
stream.on('tweet', GotTweet);

function GotTweet(tweet) {
	console.log(tweet);
}


//The following can be used to automate reply's to mentions (Spam)

var stream = T.stream('statuses/filter', { track: ['@myTwitterHandle'] });
stream.on('tweet', tweetEvent);

function tweetEvent(tweet) {

// Who sent the tweet?
    var name = tweet.user.screen_name;
    // What is the text?
    var txt = tweet.text;
    // the status update or tweet ID in which we will reply
    var nameID  = tweet.id_str;

// Get rid of the @ mention
      var txt = txt.replace(/@myTwitterHandle/g, "");

     // Start a reply back to the sender
     var reply = "You mentioned me! @" + name + ' ' + 'You are super cool!';
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

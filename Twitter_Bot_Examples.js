
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


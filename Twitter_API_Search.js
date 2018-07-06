//Use this to Scrape Data from Twitter.

//Again this file requires the config.js file ot be completed with your Twitter API keys/tokens

//This will also return Twitter's User ID for any user if their screen name is searched with this script. 
//This User ID is needed for the other twitter bots in this repo.

//Other than the config.js, you only need to change the "params" variable below:

console.log("Searching Twitter...");

var Twit = require('twit');

var config = require('./config')
var T = new Twit(config)

var params = {
	screen_name: 'INSERT_SCREEN_NAME'
// 	q: 'crab since:2013-10-06', 
// 	count: 1
};

T.get('statuses/user_timeline', params, GotData);  

function GotData(err, data, response) {
	console.log(data)
}

# Twitter Apologiser Bot:

Apologiser Bot and other various Twitter Bots created with Node.js package: Twit by ttezel (https://github.com/ttezel/twit)

Twit is an API Client for Node.js which supports both REST and Streaming API.


## Install:

Install Node.js (https://nodejs.org/en/) and then run the following:

	nmp init 

This will setup a Package.json file (It will ask you for name, version, description, main, etc.)

	npm install twit --save

This will install twit and add the twit dependancy to the Package.json file

## Setup Config File:

Rename file to config.js and fill out follwing info with your own API Keys/tokens

		module.exports = {
		consumer_key:         '...',
		consumer_secret:      '...',
		access_token:         '...',
		access_token_secret:  '...',
		}

## Usage:

Use the Twitter_API_Search.js file to find an account's UserID. Edit it to include their "screen_name" where it says "INSERT_SCREEN_NAME"

Then run:
		
    node Twitter_API_Search.js

This will return their UserID.


Then edit Apologiser_Bot.js to include the UserID where it says "INSERT_USERID"

Then run:
		
    node Apologiser_Bot.js

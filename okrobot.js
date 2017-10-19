var M = require('./markov.js');
var TT = require('./twitter.js');
const conf = require('./conf.js');
var Twit = require('twit');
//var target = 'da_667'; // HARD TARGET for testing
var T = new Twit(conf.robot);

var options = {
  nick: 'okrobot17'
};
var stream = T.stream('statuses/filter', { track: options.nick });
stream.on('tweet', function(tweet){
  console.log(tweet.user.screen_name+": "+tweet.text)
  var arg = tweet.text.split(' ');
  if(arg[0] != "@"+options.nick) return; // if tweet not to me...
  if((arg[1] == 'markov') && (arg[2][0] == '@')){ // markov request
    TT.twitterHistory(arg[2].slice(1), function(tdata){
      M.genTweet(tdata, function(mdata){
        console.log('mdata')
        T.post('statuses/update', { status: "@"+tweet.user.screen_name+" "+mdata }, function(err, data, response) {
          console.log("status: @"+tweet.user.screen_name+" "+mdata)
          return;
        });
      })
    });
  };
});

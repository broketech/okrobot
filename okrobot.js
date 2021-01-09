var M = require('./markov.js');
var TT = require('./twitter.js');
const conf = require('./conf.js');
var Twit = require('twit');
//var target = 'da_667'; // HARD TARGET for testing
var T = new Twit(conf.robot);

var options = {
  nick: conf.robot.screen_name
};
var stream = T.stream('statuses/filter', { track: options.nick });
//console.log('starting okrobot...')
stream.on('tweet', function(tweet){
  console.log(tweet.user.screen_name+": "+tweet.text)
  var arg = tweet.text.split(' ');
  // if(arg[0] != "@"+options.nick) return; // if tweet not to me...
  if((arg[1] == 'markov') ){ // markov request
    TT.twitterHistory(arg[2], function(tdata){
    var mdata = M.genTweet(tdata);
      T.post('statuses/update', { status: "@"+tweet.user.screen_name+" "+mdata, in_reply_to_status_id: tweet.id_str }, function(err, data, response) {
        console.log("status: @"+tweet.user.screen_name+" "+mdata)
        return;
      });
    })
  } else if((arg[1] == 'scrubdaddy') && (tweet.user.screen_name == 'cheeseanddope')){ // scrub tweets
    console.log(tweet.user.screen_name + " requested scrub")
    TT.scrubDaddy();
    T.post('statuses/update', { status: "@"+tweet.user.screen_name+" "+ 'scrubbing tweets daddy uwu' }, function(err, data, response) {
      console.log("status: @"+tweet.user.screen_name+" "+'scrubbing tweets')
      return;
    });
  } else { // conversation return, previously markov search request
    //var tmp = arg;
    //arg.shift();
    arg.shift();
    TT.twitterSearch(arg.join(' OR '), function(tdata){
    var mdata = M.genTweet(tdata);
      T.post('statuses/update', { status: "@"+tweet.user.screen_name+" "+mdata, in_reply_to_status_id: tweet.id_str }, function(err, data, response) {
        console.log("status: @"+tweet.user.screen_name+" "+mdata)
        return;
      });
    })
  }
});

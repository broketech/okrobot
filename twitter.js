const conf = require('./conf.js');
var Twit = require('twit');
var T = new Twit(conf.robot);  // insert api key field from conf file

module.exports.twitterHistory = function(target, cb){ // pull last x tweets from target user
  var options = {
    screen_name: '',
    include_rts: false,
    count: 200,
    exclude_replys: true
  }
  options.screen_name = target;
  T.get('statuses/user_timeline', options, function(err, data, response){
    if(err) console.log(err);
    //console.log(response)
    return cb(data);
  });
}
module.exports.twitterSearch = function(target, cb){ // pull last x tweet according to search
  var options = {
    q: '',
    count: 200
  }
  options.q = target;
  T.get('search/tweets', options, function(err, data, response){
    if(err) console.log(err);
    //console.log(response)
    if(data.statuses.length == 0 ){
      return cb('corpus too small, change your search terms')
    } else {
      return cb(data.statuses);
    }
  });
}
module.exports.scrubDaddy = function(cb){
  var options = {
    screen_name: conf.robot.screen_name, //screen name of the bot
    count: 200,
    include_rts: false, // exclude retweets
    exclude_replys: false // include all replies made by bot
  }
  T.get('statuses/user_timeline', options, function(err, data, response){
    if(err) console.log(err);
    console.log(data.length + " potential tweets to scrub") // number of tweets to delete
    for(let x of data){
      //console.log(x.id_str)
      T.post('statuses/destroy', { id: x.id_str}, function(data){
      //  console.log(data)
      })
    }
  });
}

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

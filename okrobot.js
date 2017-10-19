var mongo = require('mongodb');
var monk = require('monk');
var M = require('./markov.js');
var TT = require('./twitter.js');
var target = 'gonzohacker';

TT.twitterHistory(target, function(tdata){
  console.log(M.genTweet(tdata))
});

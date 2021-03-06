var Markov = require('markov-strings');
var rp = require('remove-punctuation');

var options = {
  stateSize: 1,
  maxLength: 235,
  minWords: 4,
  minScore: 12,
  maxTries: 65535
};
var sampleSize = 23; // run sentence generator this many times, then compare all scores

module.exports.genTweet = function(input){ // generates best sentence formatted for a tweet
  var markov = new Markov(parseText(input), options);
  markov.buildCorpusSync();
  tmpArr = [];
  for(x = 0; x < sampleSize; x++){
    tmpArr.push(markov.generateSentenceSync());
  };
  return compareScore(tmpArr);
}

function compareScore(array){ // compares scores
  var tmpString;
  var score = 0;
  for(z = 0; z < sampleSize; z++){
    if(array[z].score > score){
      score = array[z].score;
      tmpString = array[z].string;
    }
  };
  return tmpString;
}

function parseText(a, b){ // strip links, spurious newlines, and twitter handles from tweet text
//  console.log(a)
  b = [];
  for(let x of a){
    b.push(rp(x.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '').replace(/\n/gi, ' ').replace(/(@)[\n\S]+/g, '')));  // thank you stack exchange
  };
  return b;
}

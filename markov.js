const Markov = require('markov-strings').default;
var rp = require('remove-punctuation');

const options = {
  maxTries: 7784212,
  prng: Math.Random,
  filter: (result) => {
 return	!(result.string.includes('RT')) &&
        !(result.string.includes('Roe'))
  }
}
// var sampleSize = 23; // run sentence generator this many times, then compare all scores

module.exports.genTweet = function(input){ // generates best sentence formatted for a tweet
	//console.log(input)
  const markov = new Markov({ stateSize: 7 });
  markov.addData(input);
  const result = markov.generate(options);
  //markov.buildCorpusSync(function(err){if(err) {console.log('err')} });
  //tmpArr = [];
  //for(x = 0; x < sampleSize; x++){
  //  tmpArr.push(markov.generateSentenceSync());
  //};
	//
//	console.log(result)
  return result.string.toString();
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

module.exports.parseText = function(a, b){ // strip links, spurious newlines, and twitter handles from tweet text
 // console.log("a: " + a)
 // b = [];
 // for(let x of a){
    return (rp(a.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '').replace(/\n/gi, ' ').replace(/(@)[\n\S]+/g, '')));  // thank you stack exchange
 // };
//  return b;
}

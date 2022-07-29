let RiTa = require('rita');
var rp = require('remove-punctuation');


module.exports.genTweet = function(input){ // generates best sentence formatted for a tweet
	//console.log(input)
  // start rita stuff
  let rm = RiTa.markov(2, { maxAttempts: 40000000 });
  rm.addText(input);
  let sentences = rm.generate(1, { allowDuplicates: false, minLength: 21, maxLength: 50, temperature: 0.6 });
  // console.log(sentences);
  return sentences
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

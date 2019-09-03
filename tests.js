//const db = require('./mongoUtil.js');
const TT = require('./twitter.js');
/*
db.stashData('bobIsPrettyCool', [ 0, 1, 2, 3, 4], function(data){
  if(data == 'ok'){
    console.log('Stash data passed')
  } else {
    console.log('stash data error')
  }
});

db.getData('bobIsPrettyCool', function(data){
  console.log('data: '+ data)
});*/
/*
TT.twitterHistory('cheeseanddope', function(tdata){
// var mdata = M.genTweet(tdata);
//  console.log(tdata)
})*/
/*TT.twitterSearch('dark OR cyber OR blockchain', function(tdata){
// var mdata = M.genTweet(tdata);
  console.log(tdata)
  for(let x of tdata){
    console.log(x.text)
  }
  return;
})
var arg = [ 1, 2, 3, 4];
arg.shift();
arg.shift();
arg.join(' '); */
TT.scrubDaddy();

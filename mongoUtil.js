const db = require('monk')('localhost/robotdb');
const test = db.get('test');
const tweets = db.get('tweets');

module.exports.stashData = function(screenName, tweetData){ // screen name, tweets in an array
  test.insert({ 'name': screenName, "data": tweetData}, function(){
    db.close();
  });

}

module.exports.getData = function(screenName){
  test.find({'name': 'bobIsPrettyCool'}, function(err, data){
    if(err){
      console.log(err)
    } else {
      console.log(data)
      db.close();
      //return;
    }
  });
}

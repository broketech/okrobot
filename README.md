# okrobot
## A twitter bot, striving to be modular and useful as possible.

If you are def totes not a furry, this is the bot that affirms 
this fact: https://github.com/broketech/recluse/

else for the broken markov chains reply bot, read on. should work as is, 
but needs refactor for new install, as i believe the markov-strings package 
removed legacy functions :(

So far dependencies are:
node.js and npm
twit
markov-strings
remove-punctuation
mongodb
monk

### Use

Wire up a function.  See if it works.  Add to it as you want.
Currently the two main functions pulls last 200 tweets from a query,
stripping all visually problematic formatting, then feeds into
npm module markov-strings, sorts out the best scored string,
then returns.

### Some examples:

### Input:
`@okrobot17 markov screen_name`, where screen_name is the screen name of the
user you would like to sample.

### Output:
@gonzohacker
`Original iBook was difficult to listen to listen to but the cans were too thick
They also havent removed the Hyena of CueCats
discord is the test and he doesnt make her feel weird about an integer`

@viss
`same attacker gains access to make people it
TKIP and a one-liner that
If you would wager a windows dev env and have thunk it`

### Input:
`@okrobot17 markovsearch search terms`, where the corpus is produced from search
terms. Currently will crash if special characters are used for an advanced search,
or if corpus is too small.

### Output:
'software testing':
`Thank you are until being strong you it’s not because she doesn’t want to my head from math into beta testing`

'armed robber':
`Me 🗣To the bed armed the power have absolutely no fear of armed group of that security when I st…`

### Input:
`@okrobot17 scrubdaddy`, bot will scrub tweets and replies from the bot timeline.
Owner name is hard coded in function currently.

### Output
`@owner_screen_name scrubbing tweets`


### TODO

The idea is to have a rolling corpus and little interaction by the way of script triggers.
Meaning, I would like to make the bot respond to replies, and spout it's own tweets, as
opposed to reponding to commands.

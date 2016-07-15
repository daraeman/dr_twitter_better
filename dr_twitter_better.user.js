// ==UserScript==
// @name        Twitter Better
// @namespace   dr_twitter_better
// @description Block GIFs and Emojis on Twitter
// @homepageURL https://github.com/daraeman/dr_twitter_better
// @include     https://twitter.com/
// @include     https://twitter.com/*
// @version     1
// @date        2016-07-15
// @downloadURL https://raw.githubusercontent.com/daraeman/dr_twitter_better/master/dr_twitter_better.user.js
// @updateURL   https://raw.githubusercontent.com/daraeman/dr_twitter_better/master/dr_twitter_better.meta.js
// @grant       none
// ==/UserScript==

setInterval( function(){
	$( ".PlayableMedia--gif" ).hide();
	$( ".Emoji" ).hide();
}, 3000 );

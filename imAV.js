// ==UserScript==
// @name			imAV
// @namespace		imAV
// @description		Easy
// @include			http://vod.im.tv/*
// @auther			Zac
// @version			0.1.2
// ==/UserScript==


var script = document.createElement('script');
script.appendChild(document.createTextNode('(' + main + ')();'));
(document.body || document.head || document.documentElement).appendChild(script);

function main() {
	'use strict';
	var queryParameter = location.search,
		patten = /\d{4,5}/gi,
		vodid = patten.exec(queryParameter)[0],
		divContent = document.getElementById('content_photo'),
		imgContent = divContent.firstChild,
		lnkVideo = document.createElement('a'),
		url = getUrl(vodid);
		
		lnkVideo.setAttribute('href',url);
		divContent.appendChild(lnkVideo).appendChild(imgContent);
		
		function getUrl(vodid) {
			if (vodid === '') {
				return false;
			}
			var url = 'http://v1.im.tv/PaidVOD/vod/' + vodid.slice(0,1) + '/' + vodid.slice(1,2) + '/' + vodid + '.wmv';
			return url;	
		}
}
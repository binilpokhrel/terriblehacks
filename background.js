// chrome.browserAction.onClicked.addListener(function(tab) {
//   chrome.tabs.executeScript(tab.id, {code: "content_script.js"});
// });

chrome.runtime.onMessage.addListener(function (msg, sender) {
  // First, validate the message's structure
  if ((msg.from === 'content') && (msg.subject === 'togglebraille')) {
    // Enable the page-action for the requesting tab
 //    addStyleString("@font-face {
 //    font-family: 'Braille';
 //    src:url('chrome-extension://mnpojhdlckgbapjdfhgpnnaojjkfedhi/fonts/Braille.ttf.woff') format('woff'),
 //        url('chrome-extension://mnpojhdlckgbapjdfhgpnnaojjkfedhi/fonts/Braille.ttf.svg#Braille') format('svg'),
 //        url('chrome-extension://mnpojhdlckgbapjdfhgpnnaojjkfedhi/fonts/Braille.ttf.eot'),
 //        url('chrome-extension://mnpojhdlckgbapjdfhgpnnaojjkfedhi/fonts/Braille.ttf.eot?#iefix') format('embedded-opentype'); 
 //        font-weight: normal;
 //        font-style: normal;
	// }

	// *, h1, h2, h3, h4, h5, em, span, html {
	// 	font-family: 'Braille';
	// }")
  }
});

function addStyleString(str) {
	var node = document.createElement('style');
	node.innerHTML = str;
	document.body.appendChild(node)
}










// // var JSSoup = require('jssoup').default;
// // var soup; //= new JSSoup('<html><head>hello</head></html>');
// // var xhr = new XMLHttpRequest();

// // function isVisibleText(element){
// // 	var blocked = ['style', 'script', 'head', 'title', 'meta', '[document]'];
// // 	if (blocked.includes(element.parent.name))
// // 		return false;
// // 	if (isinstance(element, Comment))
// // 		return false;
// // 	return true;
// // }

// // function textFromHtml(body){
// // 	soup = JSSoup(body, 'html.parser');
// // 	texts = soup.findAll(text=true);
// // 	visibleTexts = filter(isVisibleText, texts);
// // 	return visibleTexts;
// // }

// // function translateToBraille(){
// // 	var xhr = new XMLHttpRequest();
// // 	xhr.open('GET', 'https://www.nytimes.com/2009/12/21/us/21storm.html');
// // 	xhr.responseType = 'document';
// // 	xhr.send();
// // 	//var html = xhr.open('POST', 'https://www.nytimes.com/2009/12/21/us/21storm.html', false).send
// // 	//var html = urrlib.request.urlopen('https://www.nytimes.com/2009/12/21/us/21storm.html').read()

// // 	console.log(textFromHtml(xhr));
// // }

// // translateToBraille();
// var JSSoup = require('jssoup').default;

// var doc = JSSoup.connect('https://www.nytimes.com/2009/12/21/us/21storm.html').get();

// console.log(doc.title());

// function isVisibleText(element){
// 	var blocked = ['style', 'script', 'head', 'title', 'meta', '[document]'];
// 	if (blocked.includes(element.parent.name))
// 		return false;
// 	if (isinstance(element, Comment))
// 		return false;
// 	return true;
// }

// function textFromHtml(body){
// 	var soup2 = JSSoup(body, 'html.parser');
// 	texts = soup.findAll(text=true);
// 	//visibleTexts = texts.filter(isVisibleText);
// 	return texts;
// }

// console.log("HIIU");

// // var xhr = new XMLHttpRequest();

// // xhr.open('GET', 'https://www.nytimes.com/2009/12/21/us/21storm.html')
// // //xhr.responseType = 'document';
// // xhr.send();
// // var response = xhr.response;

// //console.log(textFromHtml(html));

// // console.log(xhr);
// // console.log("HELLO");
// // console.log("HELLO");
// // console.log("HELLO");
// // console.log("HELLO");
// // console.log("HELLO");
// // console.log(xhr.responseText);



// //console.log(xhr);



// //window.open("https://www.google.com");
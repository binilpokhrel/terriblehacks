// document.addEventListener('DOMContentLoaded', function() {
//   var enableBraille = document.getElementById('checkPage');
//   checkPageButton.addEventListener('click', function() {

//     chrome.tabs.getSelected(null, function(tab) {
//       d = document;

//       var f = d.createElement('form');
//       f.action = 'http://gtmetrix.com/analyze.html?bm';
//       f.method = 'post';
//       var i = d.createElement('input');
//       i.type = 'hidden';
//       i.name = 'url';
//       i.value = tab.url;
//       f.appendChild(i);
//       d.body.appendChild(f);
//       f.submit();
//     });
//   }, false);
// }, false);

function toggleBraille(checkbox)
{
  
  // if (checkbox.checked){
  //   chrome.runtime.sendMessage({
  //     from: 'content',
  //     subject: 'enableBraille'
  //   })
  // }
  // else{
  //   chrome.runtime.sendMessage({
  //     from: 'content',
  //     subject: 'disableBraille'
  //   })
  // }
}

function toggleTorch(checkbox)
{
  // if (checkbox.checked){
  //   chrome.runtime.sendMessage({
  //     from: 'content',
  //     subject: 'enableTorch'
  //   })
  // }
  // else{
  //   chrome.runtime.sendMessage({
  //     from: 'content',
  //     subject: 'disableTorch'
  //   })
  // }
}
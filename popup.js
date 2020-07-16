document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      /*d = document;

      var f = d.createElement('form');
      f.action = 'http://gtmetrix.com/analyze.html?bm';
      f.action ='https://developers.google.com/speed/pagespeed/insights/';
      f.method = 'post';
      var i = d.createElement('input');
      i.type = 'hidden';
      i.name = 'url';
      i.value = tab.url;
      f.appendChild(i);
      d.body.appendChild(f);
      
      alert(tab.url);
      f.submit();*/
      chrome.tabs.create({"url": "https://developers.google.com/speed/pagespeed/insights/?url="+tab.url});
    });
  }, false);
}, false);
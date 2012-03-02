W.WebviewAdvanced = function() {
  var win = UI.Win({
    title:'Better Web View'
  });
  
  var webview = Ti.UI.createWebView({
    url:'http://www.nytimes.com'
  });
  
  return win;
}

W.WebviewBasic = function() {
  var win = UI.Win({
    title:'Basic Web View'
  });
  
  var webviewBasic = Ti.UI.createWebView({
    url:'http://www.nytimes.com'
  });
  
  win.add(webviewBasic);
  
  return win;
}

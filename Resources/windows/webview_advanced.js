W.WebviewAdvanced = function() {
  var win = UI.Win({
    title:'Better Web View',
    layout:'vertical'
  });
  
  var webview = Ti.UI.createWebView({
    url:'http://www.nytimes.com',
    height:'200',
    willHandleTouches:false
  });
  
  /**
   * Styling of the iOS button bar is somewhat limited.
   */
  var buttons = [
    {
      title:'Back',
      enabled:false,
      width:100,
    },
    {
      title:'Forward',
      enabled:false,
      width:100,
    },
    {
      title:'Reload',
      enabled:true,
      width:100,
    }      
  ];
  var buttonBar = Ti.UI.createButtonBar({
    left:10,
    top:30,
    labels:buttons,
    backgroundColor:'#336699',
    style:Ti.UI.iPhone.SystemButtonStyle.PLAIN,
    widht:200,
    height:25
  });
  
  win.add(webview);
  win.add(buttonBar);

  buttonBar.addEventListener('click', function(e) {
    switch (e.index) {
      case 0:
        if (webview.canGoBack()) {
          Ti.API.info('Webview went one page back');
          webview.goBack();
        }
        else {
          Ti.API.info('This webview cannot go any further back');
        }
        break;
      case 1:
        if (webview.canGoForward()) {
          Ti.API.info('Webview went one page forward');
          webview.goForward();
        }
        else {
          Ti.API.info('This webview cannot go any further forward');
        }
        break;
      case 2:
        webview.url = webview.url; // workaround, @see http://developer.appcelerator.com/question/126916/how-to-luck-url-in-webviewreload
        webview.reload();
        Ti.API.info('This webview was just reloaded');
        break;        
    }
  });

  // Change the enabled status of the backwards and forwards 
  // buttons in the button bar.  
  webview.addEventListener('load', function(e) {
    Ti.API.info(JSON.stringify(this));
    buttons[0].enabled = (this.canGoBack()) ? true : false;
    buttons[1].enabled = (this.canGoForward()) ? true : false;
    buttonBar.setLabels(buttons);
  })
  
  return win;
}

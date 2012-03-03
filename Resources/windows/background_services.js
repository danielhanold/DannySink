W.BackgroundServices = function() {
  var win = UI.Win({
    title:'Background Services',
    layout:'vertical'
  });
  
  var label = Ti.UI.createLabel({
    top:10,
    left:10,
    width:'90%',
    height:'auto',
    text:'This window just registered a background service that gets executed when the application is no longer in the foreground. This service will continue to run until it is either stopped or the app resumes.',
    font:{fontSize:13}
  });
  
  win.add(label);
  var service = Ti.App.iOS.registerBackgroundService({url:'services/bg-service.js'});
  return win;
}

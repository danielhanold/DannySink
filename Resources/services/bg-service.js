Ti.API.info('The app has been put into the background');

var randomNumberGenerator = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Schedule a notification to let the user know
 * that the application has been put into the background.
 */
var notification = {
  alertBody:'DannySink has just been put into the background',
  badge:20,
  date:new Date()
}
Ti.App.iOS.scheduleLocalNotification(notification);

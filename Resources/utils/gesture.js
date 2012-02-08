// Use a self-calling function for gesture events.
(function() {
  // Create an alert when the device is shaken.
  Ti.Gesture.addEventListener('shake', function(e) {
    alert('You just shook your device. Well done!');
  });
  
  Ti.Gesture.addEventListener('orientationchange', function(e) {
    Ti.API.log('The orientation was changed.');
    Ti.API.log('The curren orientation constant is: ' + e.orientation);
    var orientationType = (e.source.isPortrait()) ? 'Portrait' : 'Landscape';
    Ti.API.log('The type of this new orientation is: ' + orientationType);
  });
})();

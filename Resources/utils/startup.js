Ti.API.log('Startup procedures started');

// Validate that the directory to store icons for weather images exists.
(function() {
  var appDir = Ti.Filesystem.applicationDataDirectory;
  
  var weatherIconDir = Ti.Filesystem.getFile(appDir, 'weathericons');
  if (!weatherIconDir.exists()) {
    Ti.API.log('The directory for weather icons does not exists. Create it.');
    weatherIconDir.createDirectory();
  }
  else {
    Ti.API.log('The directory for weather icons already exists.');
  }
})();

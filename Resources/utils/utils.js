var Utils = {};

(function() {
  Utils.convertTemp = function(temp) {
    if(Ti.App.Properties.getString('units','c')==='f') {
        return Math.round(temp*1.8+32) +'\u00b0F'; // convert to Fahrenheit & append degree symbol-F
    } else {
        return temp +'\u00b0C';
    }    
  };
  
  Utils.weatherIcon = function(iconName) {
    // Determine if this icon is already downloaded.
    var appDir = Ti.Filesystem.applicationDataDirectory;
    var file = Ti.Filesystem.getFile(appDir, 'weathericons/' + iconName);
    // If the file does not already exists, download and store it.
    if (file.exists()) {
      Ti.API.log('Icon ' + iconName + ' exists on device filesystem. Use local file.');
      return appDir + 'weathericons/' + iconName;    
    }
    else {
      Ti.API.log('Icon ' + iconName + ' does not exists on device. Use external URL.');
      return 'http://www.worldweather.org/img_cartoon/' + iconName;
    }
  }
})();

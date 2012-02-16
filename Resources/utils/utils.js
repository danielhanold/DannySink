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
    
    // If the file already exists, display the file stored on the local filesystem.
    if (file.exists()) {
      Ti.API.log('Icon ' + iconName + ' exists on device filesystem. Use local file.');
      return appDir + 'weathericons/' + iconName;    
    }
    // Otherwise, cache the image in the local filesystem, but still
    // return the path right away, as caching takes a few seconds.
    else {
      Ti.API.log('Icon ' + iconName + ' does not exists on device. Use external URL.');
      var imageView = Ti.UI.createImageView({
        image:'http://www.worldweather.org/img_cartoon/' + iconName
      });
      // Wait a few seconds because it'll take a little bit to download the image.
      setTimeout(function() {
        // Valid images will be 35 pixels wide. Only store those images
        // in the local filesystem.
        var imageBlob = imageView.toImage();
        Ti.API.log('Width of this icon is ' + imageBlob.width);
        var file = Ti.Filesystem.getFile(appDir, 'weathericons/' + iconName);
        file.write(imageBlob);
        Ti.API.log('Successfully created this weathericon file: ' + iconName);
      }, 5000);
      return 'http://www.worldweather.org/img_cartoon/' + iconName;
    }
  }
})();

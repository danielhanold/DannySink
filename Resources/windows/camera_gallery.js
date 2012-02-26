W.CameraGallery = function() {
  var win = UI.Win({
    title:'Camera & Gallery',
    layout:'vertical'
  });
  
  var button = Ti.UI.createButton({
    title:'Select Image',
    top:10,
    width:200,
    height:50
  });
  
  var label = Ti.UI.createLabel({
    text:'Will open the Camera, if available. Otherwise, the button will open the gallery.',
    font:{fontSize:12},
    top:5,
    height:'auto',
    width:200,
  });
  
  var imageView = Ti.UI.createImageView({
    top:10,
    width:'auto',
    height:200,
    backgroundColor:'blue'
  });
  
  win.add(button);
  win.add(label);
  win.add(imageView);
  
  button.addEventListener('click', function(e) {
    Ti.API.info('Open camera (if available) or gallery');
    var cameras = Ti.Media.availableCameras;
    
    // If there is at least one camera available, show the
    // camera, otherwise show the photo gallery.
    if (cameras.length === 0) {
      Ti.Media.openPhotoGallery({
        // 'success' gets called when an image gets successfully
        // selected from the photo gallery.
        success: function(event) {
          // Called when the media type is selected
          // from the gallery.
          Ti.API.debug('The type of the selected item is: ' + event.mediaType);
          
          // Only respond to photo items.
          if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
            // Log a few things about this image.
            // @see http://developer.appcelerator.com/apidoc/mobile/latest/Titanium.Blob-object for more.
            var imageBlob = event.media;
            Ti.API.debug('Width of this image: ' + imageBlob.width);
            Ti.API.debug('Height of this image: ' + imageBlob.height);
            Ti.API.debug('Mime type of this image: ' + imageBlob.mimeType);
            Ti.API.debug('Size of this image (in KB): ' + (imageBlob.length / 1000));
            
            // Set the image in the image view.
            imageView.setImage(imageBlob);
          }
          else {
            alert('This media type is not allowed: ' + event.mediaType);
          }
        },
        
        // 'cancel' gets called when a user cancels the
        // selection process.
        cancel: function(event) {
          alert('Maybe you will select an image next time');
        },
        
        // 'error' gets called when there is an error in the process.
        error: function(event) {
          alert('An unexpected error occured. Error Code ' + error.code);
        }
      });
    }
    // Camera is available, show the camera.
    else {
      Ti.Media.showCamera({
        success: function(event) {
          // Only respond to photo items.
          if (event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
            imageView.setImage(event.media);
          }
          else {
            alert('This media type is not allowed: ' + event.mediaType);
          }          
        }
      });
    }
  });
  
  return win;
}

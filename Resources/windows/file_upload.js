W.FileUploadExample = function() {
  var win = UI.Win({
    title:'File Upload',
    layout:'vertical'
  });
  
  var button = Ti.UI.createButton({
    title:'Upload Photo',
    width:200,
    height:50,
    top:10
  });
  
  var buttonShow = Ti.UI.createButton({
    title:'Display photo below',
    width:250,
    height:50,
    top:10
  });
  var imageView = Ti.UI.createImageView({
    top:10,
    width:200,
    height:200
  });
  
  win.add(button);
  win.add(buttonShow);
  win.add(imageView);
  
  // Add an event listener to the button.
  button.addEventListener('click', function(e) {
    Ti.API.log('Opening photo browser');
    
    Ti.Media.openPhotoGallery({
      success:function(event) {
        // If a photo is successfully selected
        var xhr = Ti.Network.createHTTPClient({
          // Display this message once the file is successfully uploaded.
          onload:function(e) {
            Ti.UI.createAlertDialog({
              title:'Photo successfully uploaded',
              message:'Status code: ' + this.status
            }).show();
          },
          onerror:function(e) {
            alert('File could not be uploaded.' + e.error);
          },
          timeout:5000
        });
        
        // Define where this image should be uploaded to.
        xhr.open('POST', 'http://www.myserver.com/api/uploadAndPost.php');
        
        // Send the image.
        xhr.send({
          theImage:event.media, // even.media holds the selected blog from the gallery
          username:'foo',
          password:'bar'
        }); 
      }
    });
  });
  
  // Show the image in an imageView below the button.
  buttonShow.addEventListener('click', function(e) {
    Ti.Media.openPhotoGallery({
      success:function(event) {
        Ti.API.log(event.media);
        imageView.setImage(event.media);
      }
    });
  });
  
  
  return win;
}

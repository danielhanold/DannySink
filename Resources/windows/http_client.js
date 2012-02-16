W.HttpClient = function() {
  var win = UI.Win({
    title:'HTTP Client'
  });
  var imageView = Ti.UI.createImageView({});
  
  var url = 'http://developer.appcelerator.com/assets/img/DEV_appteam_photo.png';
  var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
      // This function is called when data is returned from the server and available for use
      // this.responseText holds the raw text return of the message (used for text/JSON)
      // this.responseXML holds any returned XML (including SOAP)
      // this.responseData holds any returned binary data
      var httpStatus = this.status;
      if (httpStatus == 200) {
        Ti.API.debug('HTTP Request was successful');
        // Use this image in the imageview and display in the window.
        imageView.image = this.responseData;
        win.add(imageView);
      }
    },
    onerror: function(e) {
      // this function is called when an error occurs, including a timeout.
      Ti.API.debug(e.error);
      alert('There was a problem with your HTTP request: ' + e.error);
      Ti.API.debug('The HTTP request status was: ' + this.status);
    },
    ondatastream: function(e) {
      // This function is called as data is downloaded
      Ti.API.debug('HTTP request is downloading data.')
    },
    timeout: 5000 // set in milliseconds
  });
  xhr.open('GET', url);
  xhr.send();
  
  return win;
}

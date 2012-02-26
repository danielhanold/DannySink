W.LocationPosition = function() {
  var win = UI.Win({
    title:'Current Position'
  });
  
  if (Ti.Geolocation.locationServicesEnabled) {
    Ti.API.debug('Location services are enabled');
    
    // Get the current location.
    Ti.Geolocation.getCurrentPosition(function(e) {
      if (e.error) {
        Ti.API.error('Error detected: ' + e.error);
      }
      else {
        var latitude = e.coords.latitude;
        var longitude = e.coords.longitude;
        var addressString = 'unknown';
        
        // Reverse-geocode the location on the device
        // if the latitude and longitude are available.
        if (latitude && longitude) {
          Ti.Geolocation.reverseGeocoder(latitude, longitude, function(e) {
            if (e.success) {
              Ti.API.info(JSON.stringify(e.places[0].address));
              Ti.API.info('Full Address from reverse: ' + JSON.stringify(e.places[0]));             
              var addressString = e.places[0].address;
              alert('Your current location is ' + addressString +'. Your coordinates are: ' + latitude + ', ' + longitude);              
            }
            else {
              alert('Your coordinates are: ' + latitude + ', ' + longitude);              
            }
          });
        }

        // Log the full results of the coordinates. 
        Ti.API.info(e.coords);
      }
    });
  } else {
    alert('Please enable location services');
  }  
  
  return win;
}

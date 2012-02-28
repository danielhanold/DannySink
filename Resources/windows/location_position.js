W.LocationPosition = function() {
  var win = UI.Win({
    title:'Current Position',
    layout:'vertical'
  });
  
  var headlineCoordinates = Ti.UI.createLabel({
    text:'Your current coordinates:',
    top:10,
    font:{fontSize:12},
    width:'auto',
    height:'auto'
  });
  
  var coordinates = Ti.UI.createLabel({
    text:'Not detected yet',
    top:5,
    font:{fontSize:14},
    width:'auto',
    height:'auto'
  });
  
  var headlineAccuracy = Ti.UI.createLabel({
    text:'Accuracy Level',
    top:15,
    font:{fontSize:12},
    width:'auto',
    height:'auto'
  });
  
  var accuracy = Ti.UI.createLabel({
    text:'Not detected yet',
    top:5,
    font:{fontSize:14},
    width:'auto',
    height:'auto'
  });
  
  var headlineAddress = Ti.UI.createLabel({
    text:'Your current address',
    top:15,
    font:{fontSize:12},
    width:'auto',
    height:'auto'
  });
  
  var address = Ti.UI.createLabel({
    text:'Will be populated once accuracy is better than ACCURACY_HUNDRED_METERS',
    top:5,
    font:{fontSize:14},
    width:'auto',
    height:'auto'
  });
  
  win.add(headlineCoordinates);
  win.add(coordinates);
  win.add(headlineAccuracy);
  win.add(accuracy);
  win.add(headlineAddress);
  win.add(address);
  
  /**
   * When this window gets opened for the first
   * time, attempt to detect the location.
   */
  if (Ti.Geolocation.locationServicesEnabled) {
    Ti.API.debug('Location services are enabled');
    
    // Get the current location.
    Ti.Geolocation.getCurrentPosition(function(e) {
      if (e.error) {
        Ti.API.error('Error detected: ' + e.error);
      }
      else {
        // Fire an application-wide event so that
        // other elements can react to this.
        Ti.App.fireEvent('location_update', e.coords);
      }
    });
  } else {
    alert('Please enable location services');
  }
  
  /**
   * Update the location when it changes.
   */
  if (Ti.Geolocation.locationServicesEnabled) {
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.distanceFilter = 10;
    
    Ti.Geolocation.addEventListener('location', function(e) {
      if (e.error) {
        Ti.API.error('Error detected: ' + e.error);
      }
      else {
        // Fire an application-wide event so that
        // other elements can react to this.
        Ti.App.fireEvent('location_update', e.coords);
      }
    })    
  }
  
  /**
   * Add a global event listener to the location_update function.
   */
  Ti.App.addEventListener('location_update', function(coords) {
    Ti.API.info('Recorded a location update');
    Ti.API.info(coords);
    
    // Set the latitude & longitude in the coordinates label.
    coordinates.text = coords.latitude + ', ' + coords.longitude;
    
    // Set the accuracy level.
    accuracy.text = coords.accuracy;
    
    // If the accuracy is better than ACCURACY_HUNDRED_METERS,
    // attempt to reverse-geocode the coordinates.
    if (coords.accuracy <= Ti.Geolocation.ACCURACY_HUNDRED_METERS) {
      Ti.Geolocation.reverseGeocoder(coords.latitude, coords.longitude, function(e) {
        Ti.API.info('Attempting to reverse-geocode location');
        if (e.success) {
          Ti.API.info(JSON.stringify(e.places[0].address));
          Ti.API.info('Full Address from reverse: ' + JSON.stringify(e.places[0]));             
          address.text = e.places[0].address;
        }
        else {
          address.text = 'Reverse-geocoding failed.';
        }
      });      
    }
  })
  
  return win;
}

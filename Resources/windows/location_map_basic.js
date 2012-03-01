W.MapBasic = function() {
  var win = UI.Win({
    title:'Basic Map'
  });
  
  
  var mapView = Ti.Map.createView({
    mapType: Ti.Map.STANDARD_TYPE,
    userLocation:true,
    regionFit:true,
    animate:true,
  });
  
  /**
   * Set the location to the current user location, if available.
   */
  if (Ti.Geolocation.locationServicesEnabled) {
    Ti.Geolocation.accuracy = Ti.Geolocation.ACCURACY_BEST;
    Ti.Geolocation.distanceFilter = 10;
    // Get the current location.
    Ti.Geolocation.getCurrentPosition(function(e) {
      if (e.error) {
        Ti.API.error('Error detected: ' + e.error);
      }
      // If the current location is successfully detected,
      // open the map view with the current location set 
      // as the center.
      else {
        mapView.region = {
          latitude:e.coords.latitude,
          longitude:e.coords.longitude,
          latitudeDelta:0.02,
          longitudeDelta:0.02          
        }
      }
    });
  }
  
  win.add(mapView);
  
  /**
   * Showcase additional events for maps.
   */
  mapView.addEventListener('complete', function(e) {
    Ti.API.info('MapView has completed querying and rendering');
    Ti.API.info(e);
  });
  mapView.addEventListener('loading', function(e) {
    Ti.API.info('MapView is querying for new data and loading said data');
    Ti.API.info(e);
  })
  mapView.addEventListener('regionChanged', function(e) {
    Ti.API.info('This MapView\'s region was changed.');
    Ti.API.info(e);
  })  
  
  return win;
}

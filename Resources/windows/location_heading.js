W.LocationHeading = function() {
  var win = UI.Win({
    title:'Heading',
    layout:'vertical'
  });
  
  var labelAccuracy = Ti.UI.createLabel({
    text:'Accuracy: Not detected yet',
    top:10,
    left:10,
    font:{fontSize:12},
    width:'auto',
    height:'auto'    
  });
  
  var labelXCoord = Ti.UI.createLabel({
    text:'XCoord: Not detected yet',
    top:10,
    left:10,    
    font:{fontSize:12},
    width:'auto',
    height:'auto'    
  });
  
  var labelYCoord = Ti.UI.createLabel({
    text:'YCoord: Not detected yet',
    top:10,
    left:10,    
    font:{fontSize:12},
    width:'auto',
    height:'auto'    
  });
  
  var labelZCoord = Ti.UI.createLabel({
    text:'ZCoord: Not detected yet',
    top:10,
    left:10,    
    font:{fontSize:12},
    width:'auto',
    height:'auto'    
  });
  
  var labelMagneticHeading = Ti.UI.createLabel({
    text:'Magnetic Heading: Not detected yet',
    top:10,
    left:10,    
    font:{fontSize:12},
    width:'auto',
    height:'auto'    
  });
  
  var labelTrueHeading = Ti.UI.createLabel({
    text:'True Heading: Not detected yet',
    top:10,
    left:10,    
    font:{fontSize:12},
    width:'auto',
    height:'auto'    
  });    
  
  win.add(labelAccuracy);
  win.add(labelXCoord);
  win.add(labelYCoord);
  win.add(labelZCoord);
  win.add(labelMagneticHeading);
  win.add(labelTrueHeading);

  /**
   * Update the labels when the heading gets updated.
   */
  var headingEventUpdate = function(e) {
    if (e.error) {
      alert('Error: ' + e.error);
    } else {
      Ti.API.info('Update heading');
      labelAccuracy.text = 'Accuracy: ' + e.heading.accuracy;
      labelXCoord.text = 'XCoord: ' + e.heading.x;
      labelYCoord.text = 'YCoord: ' + e.heading.y;
      labelZCoord.text = 'ZCoord: ' + e.heading.z;
      labelMagneticHeading.text = 'Magnetic Heading: ' + e.heading.magneticHeading;
      labelTrueHeading.text = 'True Heading: ' + e.heading.trueHeading;
    }
  }
  
  if (Ti.Geolocation.locationServicesEnabled) {
    Ti.Geolocation.purpose = 'Get Current Heading';
    Ti.Geolocation.headingFilter = 1;
    
    // Make a single request to get the current heading.
    // This will not work on the simulator. Display an
    // alert if this is executed on it.
    if (Ti.Platform.model === 'Simulator') {
      alert('Please run this test on the device!')
    }
    else {
      Ti.API.info('Attempting to get the current heading.');
      Ti.Geolocation.getCurrentHeading(function(e) {
        if (e.error) {
          alert('Your heading could not be determined');
          Ti.API.info(JSON.stringify(e.error));
        }
        else {
          Ti.API.info(e.heading);
        }
      });
      
      Ti.Geolocation.addEventListener('heading', headingEventUpdate);
    }
  }
  else {
    alert('Please enable location services.');
  }
  
  /**
   * When this window gets closed, remove
   * the event listener from Geolocation.
   */
  win.addEventListener('close', function(e) {
    Ti.Geolocation.removeEventListener('heading', headingEventUpdate);
    Ti.API.info('Heading Window was closed. Remove the event listener from heading update.');
  })
  return win;
}

W.MapForwardGeo = function() {
  var win = UI.Win({
    title:'Map by Location',
    layout:'vertical'
  });
  
  var label = Ti.UI.createLabel({
    top:10,
    left:10,
    width:'auto',
    height:'auto',
    text:'Enter a location of your choice to view it on a map'
  });
  
  var textfield = Ti.UI.createTextField({
    top:10,
    left:10,
    height:35,
    width:250,
    borderStyle:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
  });
  
  var slider = Ti.UI.createSlider({
    top:10,
    left:10,
    min:0.0025,
    max:0.4,
    width:250,
    value:0.1,
    height:'auto' 
  });
  
  var sliderLabel = Ti.UI.createLabel({
    left:10,
    top:1,
    text:'Medium Distance',
    width:250,
    height:20,
    font:{fontSize:12},
    textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
  });
  slider.addEventListener('change', function(e) {
    var delta = e.value;
    var newText = 'Medium Distance';
    if (delta > 0.3) {
      newText = 'Really far away';
    }
    else if (delta < 0.3 && delta >= 0.2) {
      newText = 'Pretty far away'; 
    }
    else if (delta < 0.2 && delta >= 0.05) {
      newText = 'Medium Distance';
    }
    else if (delta < 0.05 && delta >= 0.01) {
      newText = 'Relatively Close';
    }
    else if (delta < 0.01) {
      newText = 'Really Close';
    }
    sliderLabel.setText(newText);
  });
  
  var button = Ti.UI.createButton({
    top:10,
    left:10,
    title:'View on Map',
    systemButton:Ti.UI.iPhone.SystemButton.DONE,
    height:40,
    width:200
  });
  
  win.add(label)
  win.add(textfield);
  win.add(slider);
  win.add(sliderLabel);
  win.add(button);
 
  button.addEventListener('click', function(e) {
    var locationString = textfield.getValue();
    Ti.API.info('User entered: ' + locationString);
    
    if (locationString === '') {
      alert('Please enter a location');
    }
    // Attempt to forward-geocode the location.
    else {
      Ti.Geolocation.forwardGeocoder(locationString, function(e) {
        // Make the textfield loose focus and those close the keyboard.
        textfield.blur();
        
        // If the location was successfully forward-geocoded,
        // open said location in a modal window.
        if (e.success == 1) {
          Ti.API.info('Successfully forward-geocoded location');
          Ti.API.info(e);
          var closeButton = Ti.UI.createButton({
            height:44,
            title:'Close Map',
            style:Ti.UI.INPUT_BORDERSTYLE_ROUNDED
          });
          var modalWindow = Ti.UI.createWindow({
            title:locationString,
            leftNavButton:closeButton            
          });
          var annotations = [
            Ti.Map.createAnnotation({
              latitude:e.latitude,
              longitude:e.longitude,
              title:'Searched Location',
              subtitle:locationString,
              animate:true,
              pincolor:Ti.Map.ANNOTATION_RED
            })
          ];
          var mapView = Ti.Map.createView({
            mapType:Ti.Map.HYBRID_TYPE,
            regionFit:true,
            animate:true,
            userLocation:false,
            annotations:annotations,
            region:{
              latitude:e.latitude,
              longitude:e.longitude,
              latitudeDelta:slider.value,
              longitudeDelta:slider.value     
            }
          });
          modalWindow.add(mapView);
          modalWindow.open({
            modal:true,
            modalTransitionStyle:Ti.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL,
            modalStyle:Ti.UI.iPhone.MODAL_PRESENTATION_FORMSHEET,
          });
          closeButton.addEventListener('click', function(e) {
            Ti.API.info('Modal window is closed');
            modalWindow.close();
          })          
        }
        else {
          alert('Your location could not be found. Please try a different location');
          textfield.setValue('');
        }
      })
    }
  })
  
  return win;
}

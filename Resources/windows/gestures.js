W.Gestures = function() {
  var win = UI.Win({
    title:'Gestures',
    backgroundColor:'#CCCCCC'
  });

  // Create a view with a vertical layout.
  var view = Ti.UI.createView({
    layout:'vertical',
    backgroundColor:'#EEEEEE',
  });
  
  // Add a button to that view.
  var button = Ti.UI.createButton({
     title: 'Swipe or touch ',
     top: 10,
     width: 200,
     height: 50
  });
  
  var headlineSwipe = Ti.UI.createLabel({
    top:10,
    text:'Last Swipe Action',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:10},
    textAlign:'center'    
  });

  var labelSwipe = Ti.UI.createLabel({
    top:2,
    text:'No action detected yet',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:20},
    textAlign:'center'
  });
  
  var headlineTouch = Ti.UI.createLabel({
    top:10,
    text:'Touch Info',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:10},
    textAlign:'center'    
  });

  var labelTouch = Ti.UI.createLabel({
    top:2,
    text:'No touch detected yet',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:20},
    textAlign:'center'
  });

  view.add(button);
  view.add(headlineSwipe);
  view.add(labelSwipe);
  view.add(headlineTouch);
  view.add(labelTouch);

  var viewAction = Ti.UI.createView({
    originalWidth:200,
    originalHeight:50,
    width:200,
    height:50,
    backgroundColor:'blue', 
    top:20
  });
  var actionViewLabel = Ti.UI.createLabel({
    text:'Pinch or drag on me',
    height:'auto',
    width:'auto',
    color:'white',
    font:{fontSize:12},
    textAlign:'center'
  });
  viewAction.add(actionViewLabel);
  
  var headlinePinch = Ti.UI.createLabel({
    top:10,
    text:'Pinch the screen (this view) anywhere to trigger a pinch. Does not work on buttons.',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:10},
    textAlign:'center'    
  });

  var labelPinch = Ti.UI.createLabel({
    top:2,
    text:'No pinch detected yet',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:20},
    textAlign:'center'
  });  
  
  var headlineTm = Ti.UI.createLabel({
    top:10,
    text:'Touch and drag anywhere EXCEPT the button',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:10},
    textAlign:'center'    
  });
  
  var labelTm = Ti.UI.createLabel({
    top:0,
    text:'No touch detected yet',
    height:'auto',
    width:'auto',
    color:'#900',
    font:{fontSize:20},
    textAlign:'center'
  });  

  view.add(viewAction);
  view.add(headlinePinch);
  view.add(labelPinch);  
  view.add(headlineTm);
  view.add(labelTm);
  win.add(view);
  
  // Event Listeners.
  
  // Swipe Action.
  button.addEventListener('swipe', function(e) {
    var text = 'You swiped to the ' + e.direction + '.';
    labelSwipe.setText(text);
  });
  
  // Touch Action.
  button.addEventListener('touchstart', function(e) {
    labelTouch.setText('You started touching the button.'); 
  });
  button.addEventListener('touchend', function(e) {
    labelTouch.setText('You are done touching the button.'); 
  });
  button.addEventListener('longpress', function(e) {
    labelTouch.setText('You are "longpressing" this button')
  });
  
  view.addEventListener('pinch', function(e) {
    labelPinch.setText('You pinched me.');
    Ti.API.log(e.scale);
    viewAction.setWidth(viewAction.originalWidth * e.scale);
    viewAction.setHeight(viewAction.originalHeight * e.scale);
  });
  viewAction.addEventListener('touchmove', function(e) {
    labelTm.setText('x = ' + e.x + '; y = ' + e.y);
  });
    
  return win;  
}

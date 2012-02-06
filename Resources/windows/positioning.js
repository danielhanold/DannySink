// Code for positioning examples.
W.Positioning = function() {
  // Create a new window.
  var win = UI.Win({
    title:'Positioning',
    backgroundColor:'#FFFFFF'
  });
  
  // Creating a bunch of views and adding them to the window.
  var redView = Ti.UI.createView({
    top:20,
    left:20,
    width:10,
    height:10,
    backgroundColor:"red"
  });
  
  var yellowView = Ti.UI.createView({
    bottom:100,
    right:100,
    width:10,
    height:10,
    backgroundColor:'yellow'
  });
  
  var blueView = Ti.UI.createView({
    center: {x:160,y:240},
    width:50,
    height:50,
    backgroundColor:'blue'
  });
  
  var greenView = Ti.UI.createView({
    top:-20,
    width:10,
    height:10,
    backgroundColor:'green'
  })
  
  // Add all views to an array and add to window.
  var views = [];
  views.push(redView);
  views.push(yellowView);
  views.push(blueView);
  views.push(greenView);
  for (i = 0; i < views.length; i++) {
    win.add(views[i]);
  }
  
  return win;
}

W.LayoutModes = function() {
  // Create the window.
  win = UI.Win({
    title:'Layout Modes',
    backgroundColor:'#CCCCCC'
  });
  
  // Create a function that creates colored boxes.
  function makeBox(color) {
    color = color || 'black';
    return Ti.UI.createView({
      top:20,
      left:20,
      width:20,
      height:20,
      backgroundColor:color
    });
  }
  
  // Create a view that fills out the whole window.
  var view = Ti.UI.createView({
    backgroundColor:'transparent',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
  });
  
  // Define the layout mode for the view.
  view.layout = 'absolute'; // Default layout mode.
  view.layout = 'vertical'; // Vertical layout mode, "top" element of each view defines vertical offset.
  view.layout = 'horizontal'; // Horizontal layout mode, "left" element of each view defines horizontal offset.
  
  // Add four colored boxes to the view.
  var colors = ['red', 'yellow', 'blue', 'green'];
  for (i = 0; i < colors.length; i++) {
    view.add(makeBox(colors[i]));
  }
  
  // Add the view to the window.
  win.add(view);
  
  return win;
};

W.ScrollableView = function() {
  var win = UI.Win({title:'Scrollable View'});
  
  // Create three views and put them into an array.
  var views = [];
  views.push(Ti.UI.createView({backgroundColor:'red'}));
  views.push(Ti.UI.createView({backgroundColor:'green'}));
  views.push(Ti.UI.createView({backgroundColor:'blue'}));
  
  // Create a scrollable view using these views.
  scrollableView = Ti.UI.createScrollableView({
    views:views,
    showPagingControl:true,
    width:200,
    height:200
  });
  
  // Add a button on the screen to have the view scroll to #3.
  var button = Ti.UI.createButton({
    title:'Scroll to #3',
    bottom:20,
    center:'50%',
    height:50,
    width:100
  });
  
  win.add(scrollableView);
  win.add(button);
  
  // Add event handlers.
  button.addEventListener('click', function(e) {
    scrollableView.scrollToView(2);
  });
  
  return win;
}

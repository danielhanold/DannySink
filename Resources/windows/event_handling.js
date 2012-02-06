W.EventHandling = function() {
  var win = UI.Win({
    title:'Event Handling',
    backgroundColor:'#FFFFFF',
    objectName:'window'
  });
  
  // Add a view with a yellow background.
  var view = Ti.UI.createView({
    backgroundColor:'yellow',
    width:'80%',
    height:'80%',
    objectName:'view'
  });
  
  var button1 = Ti.UI.createButton({
    title:'Change View Background Color',
    systemButton:Ti.UI.iPhone.SystemButtonStyle.BORDERED,
    width:300,
    height:40,
    objectName:'button 1'
  });
  
  var button2 = Ti.UI.createButton({
    title:'Change Background Color',
    systemButton:Ti.UI.iPhone.SystemButtonStyle.BORDERED,
    width:300,
    height:40,
    top:40,
    objectName:'button 2'
  });  
  
  // Add event listener to the whole window.
  // This gets triggered when the user clicks ANYWHERE within
  // this window, even if the space that gets clicked is covered 
  // by something else. The source object will refer to the actual
  // element clicked, not the window.
  win.addEventListener('click', function(e) {
    Ti.API.log('window clicked');
    Ti.API.log('Object Name: ' + e.source.objectName);
  });
  
  // Add event listener to the view object.
  view.addEventListener('click', function(e) {
    Ti.API.log('view clicked');
  });
  
  // Add event listener to the button.
  button1.addEventListener('click', function(e) {
    Ti.API.log('button 1 clicked');
    view.setBackgroundColor('blue');
  })
  
  // Add application-level event to button 2.
  button2.addEventListener('click', function(e) {
    Ti.API.log('button 2 clicked');
    Ti.API.log('fire changeLayout event');
    Ti.App.fireEvent('changeLayout');
  })
  
  // Add an application-level event listener.
  Ti.App.addEventListener('changeLayout', function(e) {
    Ti.API.log('respond to application-level event: ' + e.type)
    win.setBackgroundColor('green');
  });
  
  // Add a button to the view.
  view.add(button1);
  view.add(button2);
  win.add(view);
  
  return win;
}

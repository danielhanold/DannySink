W.SoundButton = function() {
  var win = UI.Win({
    title:'Sound Button',
    layout:'vertical'
  });
  
  var button = Ti.UI.createButton({
    title:'Play Click Sound',
    top:10,
    width:200,
    height:50
  });
  
  win.add(button);
  
  /**
   * Event Listeners.
   */
  button.addEventListener('click', function(e) {
    Ti.Media.createSound({
      url:Ti.Filesystem.resourcesDirectory + 'sounds/42899__freqman__canon-dos-d30-no-focus.wav'
    });
  });
  
  return win;
}

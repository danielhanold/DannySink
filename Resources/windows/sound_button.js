W.SoundButton = function() {
  var win = UI.Win({
    title:'Sound Button',
    layout:'vertical'
  });
  
  var button = Ti.UI.createButton({
    title:'Play Basic Sound',
    top:10,
    width:200,
    height:50
  });
  
  win.add(button);

  var sound = Ti.Media.createSound({
    url:Ti.Filesystem.resourcesDirectory + 'sounds/42899__freqman__canon-dos-d30-no-focus.wav',
    preload:true
  });
  
  /**
   * Event Listeners.
   */
  button.addEventListener('click', function(e) {
     Ti.API.info('Sound played');
    sound.play();
  });
  
  return win;
}

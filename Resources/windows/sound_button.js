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
  
  var buttonStream = Ti.UI.createButton({
    title:'Stream Sound from web',
    top:20,
    width:200,
    height:50
  });
  
  var buttonStreamControls = Ti.UI.createButton({
    title:'Pause Streaming Sound',
    top:10,
    width:250,
    height:40,
  });
  
  win.add(button);
  win.add(buttonStream);

  var sound = Ti.Media.createSound({
    url:Ti.Filesystem.resourcesDirectory + 'sounds/42899__freqman__canon-dos-d30-no-focus.wav',
    preload:true
  });
  
  var soundStream = Ti.Media.createAudioPlayer({
    url:'http://www.freesound.org/data/previews/2/2686_5150-lq.mp3'
  });
  
  /**
   * Event Listeners.
   */
  button.addEventListener('click', function(e) {
     Ti.API.info('Sound played');
    sound.play();
  });
  
  buttonStream.addEventListener('click', function(e) {
    Ti.API.info('Start streaming sound');
    soundStream.start();
    // Add the stream control button.
    win.add(buttonStreamControls);
  });
  
  buttonStreamControls.addEventListener('click', function(e) {
    // If the audio player is playing, stop it and 
    // change the text of the button to "resume audio".
    if (soundStream.playing) {
      soundStream.pause();
      this.title = "Resume Audio Stream";
      Ti.API.info('Audio stream paused');
    }
    else if (soundStream.paused) {
      soundStream.start();
      this.title = "Pause Audio Stream";
      Ti.API.info('Audio stream resumed');
    }
  });
  
  return win;
}

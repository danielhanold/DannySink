W.Video = function() {
  var win = UI.Win({
    title:'Video Examples',
    layout:'vertical'
  });
  
  var buttonVideo = Ti.UI.createButton({
    title:'Start Video',
    top:10,
    width:200,
    height:40
  });
  
  var video = Ti.Media.createVideoPlayer({
    url:Ti.Filesystem.resourcesDirectory + 'video/video_titanium.m4v',
    fullscreen:true
  });
  
  win.add(buttonVideo);
  
  buttonVideo.addEventListener('click', function(e) {
    win.add(video);
    video.start();
  });
  
  // When the movie ends or the user exits
  // the playback, stop the movie.
  video.addEventListener('complete', function(e) {
    video.stop();
    Ti.API.info('Video was stopped');
  });
  
  // Also stop the video when the user exits
  // the fullscreen video. This is required because
  // otherwise the video is not actual removed, but
  // only paused (and won't start up again when the
  // play button is clicked).
  // @see http://developer.appcelerator.com/question/72331/complete-event-not-firing-when-hitting-done
  video.addEventListener('fullscreen', function(e) {
    if (!e.entering) {
      Ti.API.info('User clicked the "Done" button, stop the video');
      video.stop();
    }
  })
  
  return win;
}

W.FileDownloadExample = function() {
  var win = UI.Win({
    title:'File Download',
    layout:'vertical'
  });
  
  var button = Ti.UI.createButton({
    title:'Start Download',
    top:10,
    width:250,
    height:30
  });
  
  var progressBar = Ti.UI.createProgressBar({
    width:250,
    height:30,
    min:0,
    max:1,
    value:0,
    style:Ti.UI.iPhone.ProgressBarStyle.PLAIN,
    top:10,
    message:'Downloading Image',
    font:{fontSize:12, fontWeight:'bold'},
    color:'#888'
  });
  
  var imageView = Ti.UI.createImageView({
    width:200,
    height:200,
    top:20
  });
  
  win.add(button);
  win.add(progressBar);
  win.add(imageView);
  progressBar.show();
  
  button.addEventListener('click', function(e) {
    var xhr = Ti.Network.createHTTPClient({
      onload: function(e) {
        Ti.API.info('Image was successfully downloaded');
        imageView.setImage(this.responseData);
      },
      onerror:function(e) {
        alert('There was an error downloading the image:' + e.error);
      },
      ondatastream:function(e) {
        progressBar.value = e.progress;
        Ti.API.info('Download Progress: ' + e.progress);
      },
      timeout:5000
    });
    xhr.open('GET', 'http://farm4.static.flickr.com/3244/3115485060_076a345932_o.jpg');
    xhr.send();
  });
  
  return win;
}

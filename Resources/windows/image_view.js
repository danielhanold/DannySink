W.ImageView = function() {
  var win = UI.Win({
    title:'Image View',
    layout:'vertical'
  });
  
  var scrollView = Ti.UI.createScrollView({
    layout:'vertical',
    top:0,
    contentWidth:'100%',
    contentHeight:'auto'
  });
  
  /**
   * For external views, the imageView has a parameter
   * called 'defaultImage', which is displayed before
   * the external image is loaded.
   * To test this on a Simulator, deny this application
   * outgoing connections with Little Snitch to see 
   * the defaultImage.
   */
  var imageViewExternal = Ti.UI.createImageView({
    defaultImage:Ti.Filesystem.resourcesDirectory + 'images/loading.png',
    image:'https://www.google.com/intl/en_com/images/srpr/logo3w.png',
    top:10,
    height:95
  });
  
  /*
   * In order to use the 'top' parameter correctly,
   * the height of the image needs to be set.
   * Most likely, the same is true for the 'left' parameter
   * and the width of the image.
   */
  var imageViewLocal = Ti.UI.createImageView({
    image:Ti.Filesystem.resourcesDirectory + 'images/sky.jpg',
    height:150,
    top:10,
  });
  
  var imageViewGradient = Ti.UI.createImageView({
    backgroundGradient: {
      type: 'linear',
      startPoint: {
        x: '0%', 
        y: '0%'
      },
      endPoint: {
        x: '0%',
        y: '100%'
      },
      // The offset determines where that color
      // starts in the gradient. In the example
      // below, the gradient is blue at the start
      // point (0) and red at the end point (1).
      colors: [
        {color: 'red', offset: 1},
        {color: 'blue', offset: 0}
      ],
    },
    height:150,
    width:200,
    top:10  
  });
  
  scrollView.add(imageViewExternal);
  scrollView.add(imageViewGradient);
  scrollView.add(imageViewLocal);
  win.add(scrollView);
  
  return win;
}

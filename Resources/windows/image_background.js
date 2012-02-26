W.ImageBackground = function() {
  var win = UI.Win({
    title:'Background Images',
  });
  
  var scrollView = Ti.UI.createScrollView({
    layout:'vertical',
    contentWidth:'100%',
    contentHeight:'auto',
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:false,
  });
  
  var label = Ti.UI.createLabel({
    text:'It seems like background images for buttons and views are always stretched',
    height:'auto',
    width:'auto',
    top:10
  });
  
  var button = Ti.UI.createButton({
    title:'Stretched Button',
    top:20,
    width:200,
    height:50,
    backgroundImage:Ti.Filesystem.resourcesDirectory + 'images/sky.jpg',
    borderRadius:10
  });
  
  var view = Ti.UI.createView({
    top:20,
    width:100,
    height:100,
    backgroundImage:Ti.Filesystem.resourcesDirectory + 'images/sky.jpg'
  });
  
  var colorBlock = Ti.UI.createView({
    top:10,
    left:10,
    backgroundColor:'red',
    width:20,
    height:20
  });
  view.add(colorBlock);
  
  var viewRepeat = Ti.UI.createView({
    top:20,
    width:150,
    height:150,
    backgroundImage:Ti.Filesystem.resourcesDirectory + 'KS_nav_ui.png',
    backgroundRepeat:true
  });
  
  scrollView.add(label);
  scrollView.add(button);
  scrollView.add(view);
  scrollView.add(viewRepeat);
  win.add(scrollView);
  
  return win;
}

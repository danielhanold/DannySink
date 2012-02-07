W.ScrollView = function () {
  var win = UI.Win({title:'Scroll View'});
  
  var scrollView = Ti.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:false,
    verticalBounce:false,
    horizontalBounce:false,
  });
  
  var view = Ti.UI.createView({
    backgroundColor:'#336699',
    borderRadius:10,
    width:300,
    height:2000,
    top:10,
    bottom:10
  });
  
  scrollView.add(view);
  
  win.add(scrollView);
  
  // Event Listeners.
  scrollView.addEventListener('dragEnd', function(e) {
    alert('You stopped moving the thing');
  });
  
  return win;
}

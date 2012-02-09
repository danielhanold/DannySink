W.Animations = function() {
  var win = UI.Win({
    title:'Animations'
  });
  
  var box = Ti.UI.createView({
    top:10,
    borderRadius:10,
    backgroundColor:'blue',
    width:200,
    height:100
  });
  
  var label = Ti.UI.createLabel({
    text:'Click to animate',
    color:'white',
    textAlign:'center',
    width:200,
    height:20,
  });
  
  box.add(label);
  win.add(box);

  // Define an animation object.
  var fadeOut = {
    opacity:0,
    duration:500
  };
  var fadeIn = {
    opacity:1,
    duration:300
  };
  
  box.addEventListener('click', function(e) {
    // Watch out when using this. If a label is covering
    // the view and a user clicks on the label instead 
    // of the view, 'this' refers to the label.
    box.animate(fadeOut, function() {
      box.animate(fadeIn);
    });
  });
  
  
  // Transitions. iOS only.
  var viewContainer = Ti.UI.createView({
    top:140,
    width:200,
    height:200,
    backgroundColor:'gray'
  });

  var labelViewFront = Ti.UI.createLabel({
    text:'Flip to back',
    color:'white',
    textAlign:'center',
    width:200,
    height:20,
    top:10
  });
  
  var viewFront = Ti.UI.createView({
    backgroundColor:'blue',
    width:200,
    height:200,    
  });
  viewFront.add(labelViewFront);
  
  var labelViewBack = Ti.UI.createLabel({
    text:'Flip to front',
    color:'white',
    textAlign:'center',
    width:200,
    height:20,
    top:10
  });
  
  var viewBack = Ti.UI.createView({
    backgroundColor:'green',
    width:200,
    height:200,    
  });
  viewBack.add(labelViewBack);
  
  viewContainer.add(viewFront);  
  
  viewContainer.addEventListener('click', function(e) {
    viewContainer.animate({
      view:viewBack,
      transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    });
  });
  
  viewBack.addEventListener('click', function(e) {
    Ti.API.log('back');
    viewContainer.animate({
      view:viewFront,
      transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    })     
  });
  
  viewFront.addEventListener('click', function(e) {
    Ti.API.log('front');
    viewContainer.animate({
      view:viewBack,
      transition:Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
    })     
  });  
  
  
  win.add(viewContainer);
  
  return win;
}

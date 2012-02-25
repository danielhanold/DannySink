W.Media = function() {
  var win = UI.Win({
    title:'Media Functions'
  });
  
  // Define table and table data.
  var tableData = new Array();
  var rowSoundButton = Ti.UI.createTableViewRow({title:'Sound Button', header:'Sound API', hasChild:true});
  var rowVideoButton = Ti.UI.createTableViewRow({title:'Video Example', header:'Video API', hasChild:true});  
  tableData.push(rowSoundButton);
  tableData.push(rowVideoButton);
  
  var table = Ti.UI.createTableView({
    data:tableData
  });
  
  win.add(table);
  
  /**
   * Event Listeners.
   */
  rowSoundButton.addEventListener('click', function(e) {
    TabGroup.currentTab.open(W.SoundButton());
  });
  rowVideoButton.addEventListener('click', function(e) {
    TabGroup.currentTab.open(W.Video());
  });  
  
  
  return win;
}

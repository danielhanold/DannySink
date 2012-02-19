W.Media = function() {
  var win = UI.Win({
    title:'Media Functions'
  });
  
  // Define table and table data.
  var tableData = new Array();
  var rowSoundButton = Ti.UI.createTableViewRow({title:'Sound Button', header:'Sound API', hasChild:true});
  tableData.push(rowSoundButton);
  
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
  
  
  return win;
}

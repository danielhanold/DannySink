W.LocationServices = function() {
  var win = UI.Win({
    title:'Location'
  });
  
  // Define table and table data.
  var tableData = new Array();
  var rowCurrentPosition = Ti.UI.createTableViewRow({title:'Current Position', hasChild:true});
  tableData.push(rowCurrentPosition);
  
  var table = Ti.UI.createTableView({
    data:tableData
  });
  
  win.add(table);
  
  /**
   * Event Listeners.
   */
  rowCurrentPosition.addEventListener('click', function(e) {
    TabGroup.currentTab.open(W.LocationPosition());
  });
  
  return win;
}
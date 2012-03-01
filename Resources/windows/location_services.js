W.LocationServices = function() {
  var win = UI.Win({
    title:'Location'
  });
  
  // Define table and table data.
  var tableData = new Array();
  var rowCurrentPosition = Ti.UI.createTableViewRow({title:'Current Position', hasChild:true});
  var rowHeading = Ti.UI.createTableViewRow({title:'Heading', hasChild:true});
  tableData.push(rowCurrentPosition);
  tableData.push(rowHeading);
  
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
  rowHeading.addEventListener('click', function(e) {
    TabGroup.currentTab.open(W.LocationHeading());
  });  
  
  return win;
}
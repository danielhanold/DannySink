W.Examples = function() {
  var win = UI.Win({
      title:'Examples Navigation Group',
      backgroundColor:'#CCCCCC'
  });
  
  // Define table rows.
  var rowOne = Titanium.UI.createTableViewRow({title:'Row 1', header:'Group 1'});  
  var rowTwo = {title:'Row 2', hasChild:true};
  var rowThree = {title:'Row 2', header:'Group 2'};
  var tableData = new Array();
  tableData.push(rowOne);
  tableData.push(rowTwo);
  tableData.push(rowThree);
  
  // Add table rows to table.
  var table = Titanium.UI.createTableView({
      data:tableData,
      style:Ti.UI.iPhone.TableViewStyle.GROUPED
  });
  
  // Define general event listener.
  table.addEventListener('click', function(e){
    Ti.API.info(JSON.stringify(e.rowData));
    Ti.API.info('Index:' + e.index);
    Ti.API.info('Row:' + JSON.stringify(e.row));
    Ti.API.info('Source:' + JSON.stringify(e.source));
    Ti.API.info('Section:' + JSON.stringify(e.section));
  });
  
  // Add the table to the window.
  win.add(table);
  
  // Add event listeners.
  rowOne.addEventListener('click', function(e){
    Ti.API.info(JSON.stringify(e));
  });
  
  return win;
}

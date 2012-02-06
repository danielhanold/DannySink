W.Examples = function() {
  // Define table rows.
  var rowOne = Titanium.UI.createTableViewRow({title:'Positioning', header:'Layout'});  
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
    //Ti.API.info(JSON.stringify(e.rowData));
    //Ti.API.info('Index:' + e.index);
    //Ti.API.info('Row:' + JSON.stringify(e.row));
    //Ti.API.info('Source:' + JSON.stringify(e.source));
    //Ti.API.info('Section:' + JSON.stringify(e.section));
  });

  // Create a window for the navigation group.
  var winNavGroup = UI.Win({
    backgroundColor:'#CCCCCC',
    title:'Examples'
  });
  // Add the table with the navigation group to the window.
  winNavGroup.add(table);
  // Create a navigation group and add the window to it.
  var navGroup = Ti.UI.iPhone.createNavigationGroup({
    window: winNavGroup
  });
  // Add the table to the window.
  var winRoot = Ti.UI.createWindow({navBarHidden:true});
  winRoot.add(navGroup);
  
  // Add event listeners.
  rowOne.addEventListener('click', function(e){
    navGroup.open(W.Positioning());
  });
  
  return winRoot;
}

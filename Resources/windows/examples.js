W.Examples = function() {
  // Define table rows.
  var positioning = Titanium.UI.createTableViewRow({title:'Positioning', header:'Layout & Positioning', hasChild:true});  
  var layoutModes = Titanium.UI.createTableViewRow({title:'Layout Modes', hasChild:true});
  var eventHandling = Titanium.UI.createTableViewRow({title:'Event Handling', hasChild:true});
  var badge = Titanium.UI.createTableViewRow({title:'Badge Things', header:'Global Things', hasChild:true});
  var properties = Titanium.UI.createTableViewRow({title:'Properties API', hasChild:true});
  var tableData = new Array();
  tableData.push(positioning);
  tableData.push(layoutModes);
  tableData.push(eventHandling);
  tableData.push(badge);
  tableData.push(properties);
  
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
    Ti.API.info('Section:' + JSON.stringify(e.section));
  });

  // Create a window for the navigation group.
  var winNavGroup = UI.Win({navBarHidden:true});
  // Add the table with the navigation group to the window.
  winNavGroup.add(table);
  // Create a navigation group and add the window to it.
  var navGroup = Ti.UI.iPhone.createNavigationGroup({
    window: winNavGroup
  });
  // Add the table to the window.
  var winRoot = Ti.UI.createWindow({
    backgroundColor:'#CCCCCC',
    title:'Examples'    
  });
  winRoot.add(navGroup);
  
  // Add event listeners.
  positioning.addEventListener('click', function(e){
    Tab[0].open(W.Positioning());
  });
  layoutModes.addEventListener('click', function(e){
    Tab[0].open(W.LayoutModes());
  });
  eventHandling.addEventListener('click', function(e){
    Tab[0].open(W.EventHandling());
  });
  badge.addEventListener('click', function(e){
    Tab[0].open(W.Badge());
  });
  properties.addEventListener('click', function(e){
    Tab[0].open(W.PropertiesApi());
  });  
  
  return winRoot;
}

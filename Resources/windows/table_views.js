W.TableViews = function() {
  // Fill a table with data.
  var tableData = [];
  tableData.push(Ti.UI.createTableViewRow({
    title:'Table (Object Literals)',
    hasChild:true,
    win:'W.TableObjectLiteral'
  }));

  // Create a table for the nav group window.
  // Add table rows to table.
  var table = Titanium.UI.createTableView({
      data:tableData,
      style:Ti.UI.iPhone.TableViewStyle.GROUPED,
      scrollable:false
  });

  // Create the window for the navigation group.
  var winNavGroup = UI.Win({title:'Table Views'});
  
  // Add the table data to the nav group window.
  winNavGroup.add(table);

  // Create a Navigation Group and set winNavGroup as the first window to show up.
  var navGroup = Ti.UI.iPhone.createNavigationGroup({
    window: winNavGroup
  });
  
  // Create the root window for this section.
  var win = Ti.UI.createWindow({navBarHidden:true});
  var win = UI.Win({title:'test'});
  
  W.UiDeepDive
  // Add the navGroup to the root window.
  //win.add(navGroup);
  
  /**
   *  Event Listeners
   */
  table.addEventListener('click', function(e) {
    Ti.API.log('Window associated with this row: ' + (e.rowData.win || 'none'));
    // If this row has a window associated with it, open it.
    if (e.rowData.win !== undefined) {
      // I know eval is evil, but I don't know how to do this otherwise.
      //var win = eval(e.rowData.win + '()');
      //navGroup.open(win);
      navGroup.close();
    }
  });
  
  return win;
}
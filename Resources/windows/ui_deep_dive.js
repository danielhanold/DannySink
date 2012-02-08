W.UiDeepDive = function () {
  // Fill a table with data.
  var tableData = [];
  
  // Table Things.
  tableData.push(Ti.UI.createTableViewRow({
    header:'Table Things',
    title:'Object Literals as rows',
    hasChild:true,
    win:'W.TableObjectLiteral'
  }));
  tableData.push(Ti.UI.createTableViewRow({
    title:'Table Sections',
    hasChild:true,
    win:'W.TableSections'
  }));
  
  // Scroll Views.
  tableData.push(Ti.UI.createTableViewRow({
    header:'Scroll Views',
    title:'Scroll View',
    hasChild:true,
    win:'W.ScrollView'
  }));
  tableData.push(Ti.UI.createTableViewRow({
    title:'Scrollable View',
    hasChild:true,
    win:'W.ScrollableView'
  }));  

  // Create a table for the nav group window.
  // Add table rows to table.
  var table = Titanium.UI.createTableView({
      data:tableData,
      style:Ti.UI.iPhone.TableViewStyle.GROUPED,
      scrollable:false
  });

  // Create the window for the navigation group.
  var winNavGroup = UI.Win({navBarHidden:true});
  
  // Add the table data to the nav group window.
  winNavGroup.add(table);

  // Create a Navigation Group and set winNavGroup as the first window to show up.
  var navGroup = Ti.UI.iPhone.createNavigationGroup({
    window: winNavGroup
  });
  // Create the root window for this section.
  var win = Ti.UI.createWindow({title:'UI Deep Dive'});
  
  // Add the navGroup to the root window.
  win.add(navGroup);
  
  /**
   *  Event Listeners
   */
  table.addEventListener('click', function(e) {
    Ti.API.log('Window associated with this row: ' + (e.rowData.win || 'none'));
    // If this row has a window associated with it, open it.
    if (e.rowData.win !== undefined) {
      // I know eval is evil, but I don't know how to do this otherwise.
      var win = eval(e.rowData.win + '()');
      Tab[1].open(win);
    }
  });
  
  return win;
}

W.TableSections = function () {
  var win = UI.Win({title:'Table Sections'});
  
  // Create the first TableViewSections.
  var section1 = Ti.UI.createTableViewSection({headerTitle:'Header 1'});
  // Add some rows to this table.
  for (var i = 0; i < 4; i++) {
    section1.add(Ti.UI.createTableViewRow({
      title:'Row ' + i
    }));
  }
  
  // Create the second TableViewSections.
  var section2 = Ti.UI.createTableViewSection({headerTitle:'Header 2'});
  // Add some rows to this table.
  for (var i = 4; i < 20; i++) {
    section2.add(Ti.UI.createTableViewRow({
      title:'Row ' + i
    }));
  }
  
  // Create a normal table view and add the sections as data.
  var table = Ti.UI.createTableView({
    data:[section1,section2]
  });
  
  win.add(table);
  
  return win;
}

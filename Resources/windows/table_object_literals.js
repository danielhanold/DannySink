W.TableObjectLiteral = function () {
  win = UI.Win({title:'Object Literals'});
  
  var tableData = [
    {title:'Row 1'},
    {title:'Row 2'},
    {title:'Row 3', hasChild:true}
  ];
  
  var table = Ti.UI.createTableView();
  table.setData(tableData);
  win.add(table);
  
  return win;
}
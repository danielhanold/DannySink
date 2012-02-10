W.Weather = function() {
  var win = UI.Win({title:'Weather'});
  
  // Use a predefined database called 'weather.sqlite'.
  var openDB = function() {
    var db = Ti.Database.install('/database/weather.sqlite', 'weather');
    return db;  
  }
  
  // Create a function that fills an array with data for a table.
  var tableData = new Array;
  (function() {
    var query = 'SELECT * FROM cities ORDER BY city ASC';
    var db = openDB();
    var data = db.execute(query);
    while (data.isValidRow()) {
      var city = data.fieldByName('city');
      var temp = data.fieldByName('temp');
      var row = Ti.UI.createTableViewRow({
        selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
      });
      var labelCity = Ti.UI.createLabel({
        left:10,
        text:city,
        width:'auto',
        height:'auto',
        font:{fontWeight:'bold'}
      });
      var labelTemp = Ti.UI.createLabel({
        right:10,
        text:temp + '\u00b0C',
        width:'auto'
      });
      row.add(labelCity);
      row.add(labelTemp);
      tableData.push(row);
      Ti.API.log(city + ': ' + temp + ' degress');
      data.next();
    }
    data.close();
    db.close();
  })();
  
  var tableView = Ti.UI.createTableView({
    data:tableData
  });
  
  win.add(tableView);
    
  return win;
}

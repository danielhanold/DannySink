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
    var query = 'SELECT c.city AS city, c.temp AS temp, cc.condition AS condition, cc.icon AS icon FROM cities c INNER JOIN conditionCodes cc ON cc.conditionID = c.conditionID ORDER BY city ASC';
    var db = openDB();
    var data = db.execute(query);
    while (data.isValidRow()) {
      var city = data.fieldByName('city');
      var temp = data.fieldByName('temp');
      var icon = data.fieldByName('icon');
      var row = Ti.UI.createTableViewRow({
        selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
      });
      var viewIcon = Ti.UI.createImageView({
        left:10,
        image:Utils.weatherIcon(icon),
        backgroundColor:'blue',
        width:35,
        height:35
      });
      var labelCity = Ti.UI.createLabel({
        left:60,
        text:city,
        width:'auto',
        height:'auto',
        font:{
          fontWeight:'bold',
          fontSize:14
        }
      });
      var labelTemp = Ti.UI.createLabel({
        right:10,
        text:temp + '\u00b0C',
        width:'auto'
      });
      row.add(viewIcon);
      row.add(labelCity);
      row.add(labelTemp);
      tableData.push(row);
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

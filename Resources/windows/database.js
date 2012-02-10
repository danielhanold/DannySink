/*
 * @file
 * Database Functions.
 * 
 * @see https://wiki.appcelerator.org/display/guides/Working+with+a+SQLite+Database
 */
W.Database = function() {
  var win = UI.Win({
    title:'Database'
  });
  win.add(Ti.UI.createLabel({
    top:10,
    width:'80%',
    text:'See the log on this page to see what\'s going on.',
  }));  
  
  // Open a database. If this database doesn't exist, it will be automatically 
  // created, so that whenever Ti.Database.open is called, a working database
  // connection handle is available.
  var db = Ti.Database.open('dannysink');
  
  // Optionally, this database can be marked to not be backed up to iCloud or iTunes.
  // db.file.setRemoteBackup(false);
  
  // After the database is opened, get the structure setup. As part of the 
  // database bootstrap phase, create a table if it doesn't already exist.
  var query = 'CREATE TABLE IF NOT EXISTS fugitives(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, captured INTEGER, url TEXT, capturedLat REAL, capturedLon REAL)';
  db.execute(query);
  // After every usage, close the database handle.
  db.close();



  /**
   * INSERT queries.
   */
  // Insert queries use the technique of using unnamed parameters,
  // represented by question marks.
  var db = Ti.Database.open('dannysink');
  var query = 'INSERT INTO fugitives (name, captured, url, capturedLat, capturedLon) VALUES (?, ?, ?, ?, ?)';
  db.execute(query, 'Daniel Hanold', 0, 'http://www.google.com', 40.77, 73.98);
  db.execute(query, 'Jeremy Pippin', 0, 'http://www.newjersey.com', 43.77, 71.98);
  
  // If a table has an auto-increment (!) primary key, the last id
  // can be determined with the getLastInsertRowId method.
  var lastId = db.getLastInsertRowId();
  Ti.API.log('The last fugitive entered has the id: ' + lastId);
  db.close();
  
  
  
  /**
   * SELECT queries.
   */
  // A select query returns a Ti.Database.ResultSet object which can be used 
  // to access the queried data.
  var logFugitiveData = function() {
    var db = Ti.Database.open('dannysink');
    var data = db.execute('SELECT * FROM fugitives');
    
    // Loop through the result set with isValidRow until the end. 
    while (data.isValidRow()) {
      // Get the values using the fieldByName method.
      var id = data.fieldByName('id');
      var name = data.fieldByName('name');
      var url = data.fieldByName('url');
      Ti.API.log('ID = ' + id + '; Name = ' + name + '; URL = ' + url);
      // Move the result set row pointer to the next row.
      data.next();
    }    
  }
  logFugitiveData();
  
  
  /**
   * UPDATE QUERIES. 
   */
  var db = Ti.Database.open('dannysink');
  db.execute('UPDATE fugitives SET url = ? WHERE name = ?', 'http://www.yahoo.com', 'Daniel Hanold');
  logFugitiveData();
  db.close();
  
  
  
  /**
   * DELETE queries.
   */
  var db = Ti.Database.open('dannysink');
  db.execute('DELETE FROM fugitives WHERE name = ?', 'Jeremy Pippin');
  logFugitiveData();
  db.close();
  
  
  return win;
}
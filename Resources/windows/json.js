W.Json = function() {
  var win = UI.Win({title:'JSON Example'});
  
  /**
   *  JSON.stringify/parse usage.
   */
  
  // Create a test object.
  var myObject = {
    foo:'bar',
    stuff:[1,2,3]
  };
  Ti.API.debug('My Object is currently: ' + myObject);
  
  // Serialize that test object.
  // JSON.stringify doesn not work on objects that contain
  // methods.
  var myObjectString = JSON.stringify(myObject);
  Ti.API.debug('The same object is now: ' + myObjectString);
  
  // Convert the JSON-serialized data back into a JavaScript object.
  var myNewObject = JSON.parse(myObjectString);
  Ti.API.debug('Now the object is an object again: ' + myNewObject);  
  
  /**
   * Posting JSON data.
   */
  // When sending data in an xhr request, it's best to stringify
  // the data before it gets sent, even though the send method
  // should take care of that for you.
  // This example doesn't actually work, because the end point is
  // not configured correctly to work with POST requests.
  var postArgs = {
    args:'Cromwell'
  };
  
  var xhr = Ti.Network.createHTTPClient({
    onload: function(e) {
      Ti.API.debug(this.responseText);
    },
    onerror: function(e) {
      Ti.API.debug(e.error);
    },
    timeout: 10000
  });
  xhr.open('POST', 'http://www.mmappcms.com/group/mobile_data/views/property_city.json');
  postArgs = JSON.stringify(postArgs);
  //xhr.send(postArgs);
  
  /**
   * Getting JSON Data.
   * In this example, we are populating a table view 
   * with the data received from a remote source.
   */
  var table = Ti.UI.createTableView();
  win.add(table);
  
  var xhr = Ti.Network.createHTTPClient({
    // When the data has finished loading, 
    // add the data to the table row.
    onload: function(e) {
      Ti.API.debug(this.responseText);

      // Fill an array with Table View Rows.      
      var tableData = new Array();
      var data = JSON.parse(this.responseText);
      for (var i = 0, max = data.fighters.length; i < max; i++) {
        tableData.push(Ti.UI.createTableViewRow({
          title:data.fighters[i].name,
          nickname:data.fighters[i].nickname
        })); 
        Ti.API.debug('Create a table view row for: ' + data.fighters[i].name);
      }
      
      // Add the data to the table.
      table.setData(tableData);
    },
    onerror: function(e) {
      alert('There was a problem processing your request.');
      Ti.API.debug(e.error);
    },
    timeout: 10000
  });
  xhr.open('GET', 'https://raw.github.com/appcelerator/Documentation-Examples/master/HTTPClient/data/json.txt');
  xhr.send();
  
  // Add an event listener to bring up the nickname for each fighter
  // in an alert dialog when a user clicks on the fighter.
  table.addEventListener('click', function(e) {
    var alert = Ti.UI.createAlertDialog({
      title:null,
      message:'This fighter\'s nickname is "' + e.rowData.nickname + '"!'
    });
    alert.show();
  });
  
  return win;
}

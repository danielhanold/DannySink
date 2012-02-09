W.PropertiesApi = function() {
  var win = UI.Win({
    title:'Properties API',
    layout:'vertical'
  });
  
  // Create a builder function to add items to this window.
  var createBlock = function(headline, body) {
    headline = headline || 'Headline';
    body = (body == undefined) ? 'Body' : body;
    var label = Ti.UI.createLabel({
      top:10,
      text:headline,
      font:{fontSize:12},
      textAlign:'center',
      width:'auto',
      height:'auto',    
    });
    var body = Ti.UI.createLabel({
      top:2,
      text:body,
      font:{fontSize:20},
      textAlign:'center',
      width:'auto',
      height:'auto',      
    });
    win.add(label);
    win.add(body);
  }
  
  // Add the properties.
  var arrayData = Ti.App.Properties.getList('winTest_list', []);
  Ti.API.log(Ti.App.Properties.getBool('winTest_switcher', ''));
  var boolString = (Ti.App.Properties.getBool('winTest_switcher', '') === true) ? true : false;
  createBlock('A String', Ti.App.Properties.getString('winTest_string', ''));
  createBlock('A Number', Ti.App.Properties.getInt('winTest_number1', ''));
  createBlock('Is it true?', boolString);
  createBlock('A double number', Ti.App.Properties.getDouble('winTest_number2', ''));
  createBlock('The third name in a list', arrayData[2].name);
  
  return win;
}

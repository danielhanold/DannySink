// Define global namespace.
var UI = {};

// Create a self-calling function in order to not pollute the global namespace.
(function() {
  UI = {
    Win:function(e) {
      e = e || {};
      e.title = e.title || 'Window';
      e.backgroundColor = e.backgroundColor || '#DDDDDD';
      Ti.API.info('Creating a new window: ' + e.title);
      return Ti.UI.createWindow(e);
    }
  };
})();

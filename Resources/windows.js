// Define the W namespace for windows.
var W = {};

function refreshWindows(){
  Ti.include('windows/examples.js');
  Ti.include('windows/ui_deep_dive.js');
  Ti.include('windows/positioning.js');
  Ti.include('windows/table_views.js');
  Ti.include('windows/layout_modes.js');
  Ti.include('windows/event_handling.js');
  Ti.include('windows/tabgroup.js');
}

// Refresh all windows.
refreshWindows();
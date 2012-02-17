// Define the W namespace for windows.
var W = {};

function refreshWindows(){
  Ti.include('windows/examples.js');
  Ti.include('windows/ui_deep_dive.js');
  Ti.include('windows/positioning.js');
  Ti.include('windows/table_views.js');
  Ti.include('windows/table_object_literals.js');
  Ti.include('windows/table_sections.js');
  Ti.include('windows/scroll_view.js');
  Ti.include('windows/scrollable_view.js');
  Ti.include('windows/layout_modes.js');
  Ti.include('windows/event_handling.js');
  Ti.include('windows/tabgroup.js');
  Ti.include('windows/gestures.js');
  Ti.include('windows/animations.js');
  Ti.include('windows/badge.js');
  Ti.include('windows/properties_api.js');
  Ti.include('windows/database.js');
  Ti.include('windows/weather.js');
  Ti.include('windows/filesystem.js');
  Ti.include('windows/http_client.js');
  Ti.include('windows/json.js');
  Ti.include('windows/file_upload.js');
}

// Refresh all windows.
refreshWindows();
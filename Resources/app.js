// Initialize app variables.
Ti.include('utils/properties.js');

// Load include files.
Ti.include('utils/ui.js');
Ti.include('utils/gesture.js');
Ti.include('windows.js');

var TabGroup = W.TabGroup();
// Set tab 2 as the active tab.
// TabGroup.setActiveTab(1);
TabGroup.open();

  // Temporary override: Open the filesystem window
  Tab[0].open(W.Filesystem());
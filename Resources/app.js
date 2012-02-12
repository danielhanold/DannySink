// Initialize app variables.
Ti.include('utils/properties.js');

// Load include files.
Ti.include('utils/ui.js');
Ti.include('utils/utils.js');
Ti.include('utils/gesture.js');
Ti.include('windows.js');

// Load startup procedures.
Ti.include('utils/startup.js');

var TabGroup = W.TabGroup();
// Set tab 2 as the active tab.
// TabGroup.setActiveTab(1);
TabGroup.open();
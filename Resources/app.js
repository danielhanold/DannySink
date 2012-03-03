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
// Set tab 4 as the active tab.
TabGroup.setActiveTab(0);
TabGroup.open();

// Define the purpose of location services for iOS.
Ti.Geolocation.purpose = 'Driving Directions';

// Get the publisher name and description.
Ti.API.info('The name of this app\'s publisher is: ' + Ti.App.getPublisher());
Ti.API.info('This app\'s description is: ' + Ti.App.getDescription());

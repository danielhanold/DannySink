// Using the global W (windows) namespace.
W.TabGroup = function(){
  var group = Ti.UI.createTabGroup();
  
  Tab = new Array();
  
  Tab[0] = Ti.UI.createTab({
    title:'Examples',
    window:W.Examples()
  });
  
  Tab[1] = Ti.UI.createTab({
    title:'UI Deep Dive',
    window:W.UiDeepDive()
  });
  
  Tab[2] = Ti.UI.createTab({
    title:'Media',
    window:W.Media()
  });
  
  Tab[3] = Ti.UI.createTab({
    title:'Location',
    window:W.LocationServices(),
    icon:'KS_nav_views.png',
    badge:10 // Badge requires an icon to be set, otherwise doesn't work.
  });

  for (var i = 0, j = Tab.length; i < j; i++) {
    Ti.API.info('Adding a tab to the tab group: ' + Tab[i].title);
    group.addTab(Tab[i]);
  }
  
  // Add an event listeners that defines the 
  // current tab in this tab group.
  group.addEventListener('focus', function(e) {
    if (e.tab !== undefined) {
      Ti.API.log('The active tab is now: ' + e.tab.title);
      group.currentTab = e.tab;      
    }
  });
    
  return group;
};

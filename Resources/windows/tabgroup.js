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
    title:'Tab #3',
    window:UI.Win({
      title:'Third Window'
    })
  });
  
  Tab[3] = Ti.UI.createTab({
    title:'Tab #4',
    window:UI.Win({
      title: 'Fourth Window'
    })
  });

  for (var i = 0, j = Tab.length; i < j; i++) {
    Ti.API.info('Adding a tab to the tab group: ' + Tab[i].title);
    group.addTab(Tab[i]);
  }
  
  // Add an event listeners that defines the 
  // current tab in this tab group.
  group.addEventListener('focus', function(e) {
    Ti.API.log('The active tab is now: ' + e.tab.title);
    group.currentTab = e.tab;
  });
    
  return group;
};

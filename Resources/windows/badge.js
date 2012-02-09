W.Badge = function() {
  var win = UI.Win({title:'Badges'});
  
  // Define the table rows.
  var rowIncrease = Ti.UI.createTableViewRow({title:'Increase count', header:'Tab 4 badge count'});
  var rowDecrease = Ti.UI.createTableViewRow({title:'Decrease count'});
  // Create a row with a switch for the badge for Tab 4.
  var toggleCounter = Ti.UI.createTableViewRow({
    title:'Counter visibility',
    selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
  });
  var toggleCounterSwitch = Ti.UI.createSwitch({
    value:true,
    right:10
  });
  toggleCounter.add(toggleCounterSwitch);
  
  // Create a row that dipslays the settings from the settings app.
  var toggleCounterApp = Ti.UI.createTableViewRow({
    header:'Settings from Settings App',
    title:'Counter visiblity',
    selectionStyle:Ti.UI.iPhone.TableViewCellSelectionStyle.NONE
  });
  win.toggleCounterAppSwitch = toggleCounterAppSwitch;
  var toggleCounterAppSwitch = Ti.UI.createSwitch({
    right:10,
    value:Ti.App.Properties.getString('app_counter_badge_preference'),
    enabled:false    
  });
  toggleCounterApp.add(toggleCounterAppSwitch);
  
  var tableData = new Array();
  tableData.push(rowIncrease);
  tableData.push(rowDecrease);
  tableData.push(toggleCounter);
  tableData.push(toggleCounterApp);
  
  var table = Ti.UI.createTableView({
    data:tableData,
    style:Ti.UI.iPhone.TableViewStyle.GROUPED    
  });

  win.add(table);
  
  // Store the badge count for later.
  var badgeCount = Tab[3].getBadge();
  var badgeVisible = true;
  
  // Event Listeners.
  rowIncrease.addEventListener('click', function(e) {
    if (badgeVisible === true) {
      badgeCount++;
      Tab[3].setBadge(badgeCount);      
    }
  });
  
  // Decrease the tab count.
  rowDecrease.addEventListener('click', function(e) {
    if (badgeVisible === true) {
      badgeCount = (badgeCount > 0) ? (badgeCount - 1) : badgeCount;
      // Don't show a 0, just remove the badge completely.
      if (badgeCount === 0 || badgeCount < 0) {
        Tab[3].setBadge(null);
      }
      else {
        Tab[3].setBadge(badgeCount);      
      }      
    }
  });
  
  // Switch the display of the badge count of Tab 4.
  toggleCounterSwitch.addEventListener('change', function(e) {
    if (e.value === false) {
      Tab[3].setBadge(null);
      badgeVisible = false;
    }
    else {
      Tab[3].setBadge(badgeCount);
      badgeVisible = true;
    }
  });
  
  return win;
}
var Utils = {};

(function() {
  Utils.convertTemp = function(temp) {
    if(Ti.App.Properties.getString('units','c')==='f') {
        return Math.round(temp*1.8+32) +'\u00b0F'; // convert to Fahrenheit & append degree symbol-F
    } else {
        return temp +'\u00b0C';
    }    
  };
})();

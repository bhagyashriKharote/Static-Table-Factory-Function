sap.ui.define([], function() {
    "use strict";
    return {
        priceStatus: function(price) {
            if (price > 1000) {
                return { text: "Expensive", state: "Error", icon: "sap-icon://money-bills" };
            } else if (price > 500) {
                return { text: "Moderate", state: "Warning", icon: "sap-icon://wallet" };
            } else {
                return { text: "Cheap", state: "Success", icon: "sap-icon://accept" };
            }
        }
    };
});
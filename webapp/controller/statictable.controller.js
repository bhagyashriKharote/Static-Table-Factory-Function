sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/ColumnListItem",
    "statictable/model/Formatter"
], function (Controller, JSONModel, ColumnListItem, Formatter) {
    "use strict";

    return Controller.extend("statictable.controller.statictable", {
        onInit: function () {
            var oModel = new JSONModel("/model/data.json"); 
            this.getView().setModel(oModel);
        },

        createRow: function (oContext) {
            return new ColumnListItem({
                cells: [
                    new sap.m.Text({ text: "{ProductId}" }),
                    new sap.m.Text({ text: "{Category}" }),
                    new sap.m.ObjectStatus({
                        text: {
                            parts: ["Price"],
                            formatter: function (price) {
                                return Formatter.priceStatus(price).text; 
                            }
                        },
                        state: {
                            parts: ["Price"],
                            formatter: function (price) {
                                return Formatter.priceStatus(price).state; 
                            }
                        },
                        icon: {
                            parts: ["Price"],
                            formatter: function (price) {
                                return Formatter.priceStatus(price).icon;
                            }
                        }        
                    })
                ]
            });
        }
    });
});

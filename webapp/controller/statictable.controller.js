sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/Column",
    "sap/m/Text",
    "sap/m/ColumnListItem",
    "statictable/model/Formatter"
], function (Controller, JSONModel, Column, Text, ColumnListItem, Formatter) {
    "use strict";

    return Controller.extend("statictable.controller.statictable", {
        onInit: function () {
            var oModel = new JSONModel("/model/data.json"); 
            this.getView().setModel(oModel);
        
            var oColumnsModel = new JSONModel({
                TableColumns: [
                    { label: "Product ID", property: "ProductId" },
                    { label: "Category", property: "Category" },
                    { label: "Price Status", property: "Price" }
                ]
            });
            this.getView().setModel(oColumnsModel, "columns");
        },
        
        createColumn: function (sId, oContext) {
            return new Column({
                header: new Text({ text: oContext.getProperty("label") })
            });
        },
        
        createRow: function (oContext) {
            return new ColumnListItem({
                cells: [
                    new Text({ text: "{ProductId}" }),
                    new Text({ text: "{Category}" }),
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

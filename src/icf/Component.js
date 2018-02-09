sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sap.demo.icf.Component", {
        metadata: {
            manifest: "json"
        },
        
        init: function() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set a root model
            // In xx.view.xml, directly use {/name} without model name
            let oData = {
                name: "data"
            };
            let oModel = new JSONModel(oData);
            this.setModel(oModel);

            // create the views based on the url/hash
            this.getRouter().initialize();
        },
        
        exit: function() {
            console.log("Component Exit");
        }
        // ,
        // createContent: function() {
            // return sap.ui.view("AppView", {
                // viewName: "sap.suite.ui.commons.demo.tutorial.view.App",
                // type: "XML"
            // });
        // }
    });
});
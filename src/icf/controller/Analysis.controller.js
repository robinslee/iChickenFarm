sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    return Controller.extend("sap.demo.icf.controller.Analysis", {
        onInit: function() {
            
        },

        onNavButtonPressed: function() {
            this.getOwnerComponent().getRouter().navTo("overview");
        },

        onBeforeRendering: function() {
            console.log("Before");
        },

        onAfterRendering: function() {
            console.log("After");
        },

        exit: function() {
            console.log("Exit");
        }
    });
});
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    return Controller.extend("sap.demo.icf.controller.EnvMonitor", {
        onInit: function() {},

        onNavButtonPressed: function() {
            this.getOwnerComponent().getRouter().navTo("overview");
        }
    });
});
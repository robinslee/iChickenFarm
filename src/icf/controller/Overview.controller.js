sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function(Controller) {
    "use strict";

    return Controller.extend("sap.demo.icf.controller.Overview", {
        onInit: function() {
            
        },

        onNavToEnvMonitor: function() {
            this.getRouter().navTo("envMonitor");
        },

        onNavToVoiceDetection: function() {
            this.getRouter().navTo("voiceDetection");
        },

        onNavToVideoDetection: function() {
            this.getRouter().navTo("videoDetection");
        },

        onNavToAnalysis: function() {
            this.getRouter().navTo("analysis");
        },

        onNavToPrediction: function() {
            this.getRouter().navTo("prediction");
        },

        getRouter: function() {
            return this.getOwnerComponent().getRouter();
        }
    });
});
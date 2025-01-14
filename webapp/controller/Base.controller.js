sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent",
        "sap/ui/core/routing/History",
    ],

    (Controller, UIComponent, History) => {
        "use strict";

        return Controller.extend("appcatalog.controller.Base", {
            getRouter() {
                return UIComponent.getRouterFor(this);
            },

            onNavTo(viewRoute, param = null) {
                this.getRouter().navTo(viewRoute, param);
            },

            onNavBack() {
                let oHistory, sPreviousHash;
                oHistory = History.getInstance();
                sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    this.getRouter().navTo("RouteMain");
                }
            },
        });
    }
);

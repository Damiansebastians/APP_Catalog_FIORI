sap.ui.define(
    ["./Base.controller"],

    (Controller, UIComponent) => {
        "use strict";

        return Controller.extend("appcatalog.controller.Form", {
            onInit() { },

            OnPressTile(oEvent) {
                let viewRoute = oEvent
                    .getSource()
                    .getBindingContext("mTiles")
                    .getObject().View;

                this.onNavTo(viewRoute);
            },
        });
    }
);

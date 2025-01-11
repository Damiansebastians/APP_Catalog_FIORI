sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],

  (Controller, UIComponent) => {
    "use strict";

    return Controller.extend("appcatalog.controller.Main", {
      onInit() {},

      OnPressTile(oEvent) {
        let viewRoute = oEvent
          .getSource()
          .getBindingContext("mTiles")
          .getObject().View;

        let oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo(viewRoute);
      },
    });
  }
);

sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/UIComponent"],

  (Controller, UIComponent) => {
    "use strict";

    return Controller.extend("appcatalog.controller.Main", {
      onInit() {},

      OnPressTile() {
        let oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("ViewList");
      },
      OnPressTile2() {
        let oRouter2 = UIComponent.getRouterFor(this);
        oRouter2.navTo("ViewMaterial");
      },
    });
  }
);

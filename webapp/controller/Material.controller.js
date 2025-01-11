sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast"],
  (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("appcatalog.controller.List", {
      onInit() {},

      onPressProduct(oEvent) {
        //PARA VISUALIZAR EL MENSAJE
        let oItem = oEvent
          .getSource()
          .getSelectedItem()
          .getBindingContext("mproducts")
          .getObject();

        MessageToast.show(oItem.Name);
      },
    });
  }
);

sap.ui.define(
  [
    "./Base.controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
  ],
  (Controller, JSONModel, MessageToast) => {
    "use strict";

    return Controller.extend("appcatalog.controller.List", {
      onInit() {
        let aItems = [
          {
            ProductId: "HR",
            Name: "Recursos Humanos",
            Description:
              'Gestión de Personal',
            ProductPicUrl:
              "https://cdn-icons-png.flaticon.com/128/4116/4116366.png",
            Status: "Available",
            Quantity: 10,
          },
          {
            ProductId: "FI",
            Name: "Financiero",
            Description:
              'Contabilidad y Finanzas',
            ProductPicUrl:
              "https://cdn-icons-png.flaticon.com/128/4078/4078350.png",
            Status: "Available",
            Quantity: 14,
          },
          {
            ProductId: "IF",
            Name: "Sistemas",
            Description: 'Soporte Técnico',
            ProductPicUrl:
              "https://cdn-icons-png.flaticon.com/128/14274/14274129.png",
            Status: "Available",
            Quantity: 8,
          },
        ];

        let oProductsModel = new JSONModel(aItems);

        this.getView().setModel(oProductsModel, "Products");
      },

      onPressProduct(oEvent) {
        let oItem = oEvent
          .getSource()
          .getSelectedItem()
          .getBindingContext("Products")
          .getObject();

        MessageToast.show(oItem.Name);
      },
    });
  }
);

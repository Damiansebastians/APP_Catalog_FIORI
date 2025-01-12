sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, UIComponent, MessageToast, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("appcatalog.controller.Material", {
      onInit() {},

      //EVENTO PARA VISUALIZAR EL DETALLE DEL PRODUCTO
      onPressProduct(oEvent) {
        let oItem = oEvent
          .getSource()
          .getSelectedItem()
          .getBindingContext("mproducts")
          .getObject();

        let indexProduct = this.getView()
          .getModel("mproducts")
          .getData()
          .ProductCollection.indexOf(oItem);

        let oRouter = UIComponent.getRouterFor(this);
        oRouter.navTo("ViewDetail", {
          productId: indexProduct,
        });
      },

      // EVENTO PARA BUSCAR EN TIEMPO REAL
      onSearch(oEvent) {
        let aFilters = [];
        let sQuery = oEvent.getSource().getValue();

        if (sQuery && sQuery.length > 0) {
          let oFilter = new Filter("Name", FilterOperator.Contains, sQuery);
          aFilters.push(oFilter);
        }

        let oList = this.byId("listMaterial");
        let oBinding = oList.getBinding("items");
        oBinding.filter(aFilters);
      },
    });
  }
);

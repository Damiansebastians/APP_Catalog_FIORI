sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, MessageToast, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("appcatalog.controller.List", {
      onInit() {},

      //EVENTO PARA VISUALIZAR EL MENSAJE
      onPressProduct(oEvent) {
        let oItem = oEvent
          .getSource()
          .getSelectedItem()
          .getBindingContext("mproducts")
          .getObject();

        MessageToast.show(oItem.Name);
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

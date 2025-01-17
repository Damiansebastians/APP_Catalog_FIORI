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
            // FUNCIÓN PARA CAPTURAR VALORES DEL FORMULARIO
            getValues() {
                let productId = this.getById("txtProductId").getValue()
                let cboCategory = this.getById("cboCategory").getValue()
                let mainCategory = this.getById("cboMainCategory").getValue()
                let name = this.getById("txtName").getValue()
                let description = this.getById("txtDescription").getValue()
                let supplier = this.getById("txtSupplier").getValue()
                let weightMeasure = this.getById("txtWeightMeasure").getValue()
                let weightUnit = this.getById("rbgWeightUnit").getSelectedIndex() == 0 ? "KG" : "LB"
                let dateOfSale = this.getById("dtSale").getValue()
                let currencyCode = this.getById("rbgCurrency").getSelectedIndex() == 0 ? "EUR" : "USD"
                let quantity = this.getById("txtQuantity").getValue()
                let price = this.getById("txtPrice").getValue()
                let status = this.getById("swStatus").getState() ? "Available" : "Not Available"

                let newProduct = {

                    "ProductId": productId,
                    "Category": cboCategory,
                    "MainCategory": mainCategory,
                    "TaxTarifCode": "1",
                    "SupplierName": supplier,
                    "WeightMeasure": weightMeasure,
                    "WeightUnit": weightUnit,
                    "Description": description,
                    "Name": name,
                    "ProductPicUrl": "https://sdk.openui5.org/test-resources/sap/ui/documentation/sdk/images/HT-1258.jpg",
                    "Status": status,
                    "Quantity": quantity,
                    "UoM": "PC",
                    "CurrencyCode": currencyCode,
                    "Price": price,
                    "Width": 38,
                    "Depth": 21,
                    "Height": 3.5,
                    "DimUnit": "cm"
                }

                return newProduct;
            }
        });
    }
);

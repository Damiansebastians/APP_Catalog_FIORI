sap.ui.define(
  ["./Base.controller"],

  (Controller) => {
    "use strict";

    return Controller.extend("appcatalog.controller.Detail", {
      onInit() {
        this.getRouter()
          .getRoute("ViewDetail")
          .attachMatched(this._onRouteMatched, this);
      },

      //FUNCION PARA MOSTRAR EL DETALLE DEL PRODUCTO SELECCIONADO
      _onRouteMatched(oEvent) {
        let oArgs, oView;
        oArgs = oEvent.getParameter("arguments");
        oView = this.getView();

        oView.bindElement({
          path: `mproducts>/ProductCollection/${oArgs.productId}`,
          events: {
            change: this._onBindingChange.bind(this),
          },
        });
      },

      //FUNCION PARA REDIRIGIR A NOT FOUND SI LA URL ES INCORRRECTA
      _onBindingChange(oEvent) {
        let oRouter = this.getRouter();

        if (!oEvent.getSource().getBoundContext().getObject()) {
          oRouter.getTargets().display("TargetNotFound");
        }
      },
    });
  }
);

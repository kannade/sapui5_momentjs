sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

		createNickcodeModel: function () {
			var mdl = {
				"time": new Date()
			};

			var oModel = new JSONModel();
			oModel.setData(mdl);

			return oModel;
		}

	};
});
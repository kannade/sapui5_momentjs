sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"momentjs/nickcode/model/formatter"
], function (Controller, formatter) {
	"use strict";

	return Controller.extend("momentjs.nickcode.controller.Main", {

		formatter: formatter,

		onInit: function () {

		}

	});
});
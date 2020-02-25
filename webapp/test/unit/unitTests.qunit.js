/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"momentjs/nickcode/ru_momentjs/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
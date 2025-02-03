/*global QUnit*/

sap.ui.define([
	"statictable/controller/statictable.controller"
], function (Controller) {
	"use strict";

	QUnit.module("statictable Controller");

	QUnit.test("I should test the statictable controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

/*global QUnit*/

sap.ui.define([
	"modulsatu/controller/ViewPertama.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewPertama Controller");

	QUnit.test("I should test the ViewPertama controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

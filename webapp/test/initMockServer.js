sap.ui.define([
    '../localService/mockserver'

], function (mockserver) {
    'use strict';

    //initialisze mock server
    mockserver.init();

    //initialize the embedded component on HTML page

    sap.ui.require(["sap/ui/core/ComponentSupport"])

})
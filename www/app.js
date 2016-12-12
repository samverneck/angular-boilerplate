(function () {
	"use strict";			
	var app = angular.module("guiacc",["gc.controllers","ui.bootstrap","ui.router","satellizer"]);
	app.config(function($stateProvider) {
		
		var helloState = {
			name: 'home',
			url: "/home",
			template: "../templates/index.html"			
		}

	});
	
})();
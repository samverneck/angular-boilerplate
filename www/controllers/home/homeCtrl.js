(function () {
	"use strict";
	angular.module("gc.controllers",[]);
	angular
		.module("gc.controllers")
		.controller("homeCtrl", homeCtrl)

	function homeCtrl ($scope) {
		
		$scope.data = {};

		$scope.teste = function () {
			$scope.data.contatos = [{
				nome : 'mikael',
				idade : 22
			},
			{
				nome : 'Gustavo',
				idade : 25
			}]
			$scope.data.mikael = 'mikael';
				console.log($scope.data.mikael);
		}
	}
})();
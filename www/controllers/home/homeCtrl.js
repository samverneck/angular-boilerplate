(function () {
	"use strict";
	angular.module("gc.controllers",[]);
	angular
		.module("gc.controllers")
		.controller("homeCtrl", homeCtrl)

		homeCtrl.$inject = ['$scope', '$http', '$auth'];

	function homeCtrl ($scope, $http, $auth) {
		
		$scope.data = {};
		$scope.data.cadastro = {};

		$scope.loginFacebook = function (usuario) {
			$scope.authenticate = function(usuario) {
			    $auth.authenticate(usuario);
    		};
		}

		$scope.teste = function (usuario) {
			console.log(usuario);
		}  

		$scope.authenticate = function(provider) {

			$authProvider.facebook({
			    clientId: '1814221662151616'
			});		
	       console.log(provider);
	       $auth.authenticate(provider)
	       .then(function (response) {
	         console.log(response.access_token);
	        //  var fields = ['id', 'email', 'password'];
	        //  var graphApiUrl = 'https://graph.facebook.com/v2.5/me?fields=' + fields.join(',');
	           //   $http({
	           //     method:'GET',
	           //     url: graphApiUrl,
	           //     headers: {
	           //       'Content-Type':'application/json'
	           //     }
	           //   }).then(function successCallback(response) {
	           //     console.log(response);
	           //     var userData = response.data;
	           //     console.log(userData);      
	           // });
	       });

	        authenticate('facebook');
	      }                    

	}
})();
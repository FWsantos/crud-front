app = angular.module("crud", []);
app.controller("crudCtrl", function($scope) {
	$scope.acao = "Cadastro";
	$scope.nomes = ["Wesley"];

	$scope.salvar = function (nome){
		$scope.nomes.push(nome);
	};

});
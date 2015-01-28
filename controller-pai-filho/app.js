var app = angular.module('myApp', []);

app.controller('PaiController', function($scope) {
	$scope.pessoa = {
		greeted: false
	};
});

app.controller('FilhoController', function($scope) {
	$scope.sayHello = function() {
		$scope.pessoa.name = "Lucas Campos"
	}
});
angular.module('myApp', ['emailParser']).controller('MyController', ['$scope', 'EmailParser', function($scope, EmailParser) {
	$scope.to = "lucascampos@gmail.com"
	$scope.$watch('emailBody', function(body) {
		if (body) {
			$scope.previewText = EmailParser.parse(body, {to: $scope.to});
		}
	});
}]);
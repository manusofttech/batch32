
var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
    $scope.marks=[12,23,34,45,56,341,343];
		$scope.cricketers=[{name:"Sachin",age:"45"},{name:"Yuvi",age:"35"},{name:"Dhoni",age:"36"},{name:"Kohli",age:"26"}];
});

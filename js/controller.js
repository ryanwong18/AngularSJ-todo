angular.module('todoApp')
    .controller('appControl', ['$scope', 'appService', function($scope, appService) {
        $scope.listItem = '';

        $scope.submitForm = function() {
            if($scope.listItem !== "") {
                $scope.listArray = appService.addItem($scope.listItem);
                $scope.listItem = '';
            }
        };

        $scope.clearForm = function() {
            $scope.listArray = appService.clearArray();
        };
    }])
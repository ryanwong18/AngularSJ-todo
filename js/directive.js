angular.module('todoApp')
    .directive('displayItems', [function() {
        return {
            templateUrl: 'directive-view/display.html',
            restrict: 'E',
            scope : {
                itemInfo: '=info'
            },
            link: function(scope, element, attrs) {
               scope.remove = function(value) {
                   var index = utility.findIndex(scope.itemInfo, value);
                   utility.removeItem(scope.itemInfo, index, 1);
               };

               scope.move = function(value, direction) {
                   var index = utility.findIndex(scope.itemInfo, value);
                   if(direction === "up") {
                        if(index > 0) {
                            var removeItem = utility.removeItem(scope.itemInfo, index, 1);
                            scope.itemInfo.splice(index-1, 0, removeItem.join());
                        }
                   }
                   if(direction === "down") {
                        if(index < scope.itemInfo.length-1) {
                            var removeItem = utility.removeItem(scope.itemInfo, index, 1);
                            scope.itemInfo.splice(index+1, 0, removeItem.join());
                        }
                   }
               }
            }
        };
    }]);
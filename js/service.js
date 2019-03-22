angular.module('serviceModule', [])
    .service('appService', [function() {
        var listArray = [];

        function addItem(item) {
            listArray.push(item);
            return listArray;
        }

        function clearArray() {
            listArray.length = 0;
            return listArray;
        }

        return {
            addItem: addItem,
            clearArray: clearArray
        }
    }])
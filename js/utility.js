var utility = {};

utility.findIndex = function(obj, value) {
    var index = obj.indexOf(value);
    return index;
}

utility.removeItem = function(obj, index, numberOfItems) {
    var removedItem = obj.splice(index, numberOfItems);
    return removedItem;
}


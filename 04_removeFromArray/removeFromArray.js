const removeFromArray = function(array, remove) {
    let a;
    for (let j = 1; j <= arguments.length;j++) {
        a = arguments[j];
        for (let i = 0; i < array.length; i++) {
            if (array[i] === a) {
                array.splice(i,1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

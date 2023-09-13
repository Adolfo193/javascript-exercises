

const removeFromArray = function(array, ...values) {
    array=array.filter(item => !values.includes(item))
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

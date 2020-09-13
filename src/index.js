exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let min = Math.min.apply(null, array);
    return min;
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    let max = Math.max.apply(null, array);
    return max;
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }
    return array.reduce((acc, item) => acc + item) / array.length;
};

const sumAll = function(a,b) {
    let sum = 0;
    if (a < 0 || b < 0) {
        return "ERROR"
    }
    else if (typeof(a) != "number" || typeof(b) != "number") {
        return "ERROR"
    }
    else {
        let i = Math.min(a,b);
        for (; i <=Math.max(a,b); i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;

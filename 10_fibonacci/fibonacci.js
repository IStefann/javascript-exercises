const fibonacci = function (n) {
    if (n >= 0) {
        if (n <= 1)
            return parseInt(n);
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    else
    return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;

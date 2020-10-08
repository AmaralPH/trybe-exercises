var fibonacci = function(num) {
    fibo = [1, 1]
    if (num == 0) {
        return fibo;
    } else {
        for (var i = 0; i < num; i ++) {
            fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2]);
        };
    };
    return fibo;
}

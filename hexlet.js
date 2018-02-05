function sum(a, b, c) {
    let num;
    for (let i = a - 1; i > 0; i--) {

        if (i % b == 0 || i % c == 0) {
            num == undefined ? num = 0 : num;
            console.log(num);
            num = num + i;
            console.log(num);
        }
    }
    if (num == undefined) {
        return 0;
    }
    return num;
}

function calc(op, a, b) {
    switch (op) {
        case '+':
            return a + b
            break
        case '-':
            return a - b
            break
        case '/':
            return a / b
            break
        case '*':
            return a * b
            break
        default:
            return NaN
    }
}

function addDigits(num) {
    let res;
    let result;

    function sum(n) {
        let i = 0;
        result = 0;
        while (i < String(n).length) {
            result += Number(n[i]);
            result = Number(result);
            i++;
        }
        return res;
    }
    if (num == 0) {
        res = 0;
    } else {
        sum(String(num));
        if (String(result).length === 1 && result != 0) {
            res = Number(result);
            return res;
        } else if (String(result).length > 1) {
            res = Number(result);
            sum(String(res));
            res = Number(result);
        }
    }
    return res;
}
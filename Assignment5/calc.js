//calculator closure
function add(a) {
    return function (b) {
        return a + b;
    }
}

var x = add(6);
console.log("Add: ", x(3));

function sub(a) {
    return function (b) {
        return a - b;
    }
}

var x = sub(6);
console.log("Sub: ", x(3));

function mul(a) {
    return function (b) {
        return a * b;
    }
}

var x = mul(6);
console.log("Mul: ", x(3));

function div(a) {
    return function (b) {
        return a / b;
    }
}

var x = div(6);
console.log("Div: ", x(3));
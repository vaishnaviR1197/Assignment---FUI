//Calculator using object
const calc = new Object();
calc.a = 20;
calc.b = 5;
calc.add = function () {
    return this.a + this.b;
}
calc.sub = function () {
    return this.a - this.b;
}
calc.mul = function () {
    return this.a * this.b;
}
calc.div = function () {
    return this.a / this.b;
}
console.log(calc.add());
console.log(calc.sub());
console.log(calc.mul());
console.log(calc.div());
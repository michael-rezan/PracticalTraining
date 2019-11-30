function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Введите любое число: ");
    };
}

let acc = new Accumulator(2);
acc.read();
acc.read();
alert("Итоговое значение: " + acc.value);
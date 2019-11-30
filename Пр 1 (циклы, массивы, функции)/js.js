function last(thisArr) {
    let ret = thisArr[thisArr.length - 1];
    return ret ;
}

let arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(Math.round((Math.random() - 0.5) * 100));
}

// console.log("z1");

// let numbers = [];
// for (let i = 0; i < 100; i++) {
//     numbers[i] = i + 1;
//     console.log(numbers[i]);
// }

//console.log("z2");

// for (let i = 100; i> 0; i--) {
//     console.log(i);
// }

// console.log("z3");

// for (let i = 0; i < 100; i++) {
//     if ((i + 1) % 2 == 0) {
//         console.log(i + 1);
//     }
// }

// console.log("z4");

// let numbers = [];

// for (let i = 0; i < 10; i++) {
//     numbers[i] = "x";
//     console.log(numbers[i]);
// }

// console.log("z5");

// var arr = [];

// for (var i = 1; i <= 10; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// console.log("z6");

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.random().toFixed(1));
// }
// console.log(arr);

// console.log("z7");

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr.push(Math.random().toFixed(1) * 10);
// }

// console.log(arr);

// console.log("z8***");

// function last(thisArr) {
//     let ret = thisArr[thisArr.length - 1];
//     return ret ;
// }

// let arr = [], min = 0, max = 0;

// for (let i = 0; i < 100; i++) {
//     arr.push(Math.round((Math.random() - 0.5) * 100));
//     if (last(arr) > max) {
//         max = last(arr);
//     } else if (last(arr) < min) {
//         min = last(arr);
//     }
// }

// console.log(arr);
// console.log("min - " + min);
// console.log("max - " + max);

// console.log("z8");

// function last(thisArr) {
//     let ret = thisArr[thisArr.length - 1];
//     return ret ;
// }

// let arr = [];

// for (let i = 0; i < 100; i++) {
//     arr.push(Math.round((Math.random() - 0.5) * 100));
//     if (last(arr) > 0 && last(arr) < 10) {
//         console.log(last(arr));
//     }
// }

// console.log(arr);

// function last(thisArr) {
//     let ret = thisArr[thisArr.length - 1];
//     return ret ;
// }

// console.log("z9");

// let arr = [];

// for (let i = 0; i < 100; i++) {
//     arr.push(Math.round((Math.random() - 0.5) * 100));
//     if (last(arr) == 5) {
//         console.log("Есть");
//         break;
//     }
// }

// console.log(arr);

// function last(thisArr) {
//     let ret = thisArr[thisArr.length - 1];
//     return ret ;
// }

// console.log("z10");


// let arr = [], sum = 0;

// for (let i = 0; i < 10; i++) {
//     arr.push(Math.round((Math.random() - 0.5) * 100));
//     sum += last(arr);
// }

// console.log(arr);
// console.log(sum);

// console.log("z11");

// let sumSqr = 0

// for (let i = 0; i < arr.length; i++) {
//     sumSqr += Math.pow(arr[i], 2);
// }

// console.log(arr);
// console.log(sumSqr);

// console.log("z12");

// let sum = 0, midCount;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// midCount = sum / arr.length;

// console.log(arr);
// console.log("Сумма = " + sum);
// console.log("Среднее арифметическое = " + midCount);
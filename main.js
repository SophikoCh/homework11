// function exercise1() {
//     let number = prompt("Enter a number: ");
//     let result = "";

//     for (let i = 0; i < number; i++) {
//         for (let j = 0; j < number; j++) {
//             result += "*";
//         }
//         result += "\n";
//     }
//     alert(result);
// }

// exercise1()

// function exercise2() {
//     function isPrime(n) {
//         for (let i = 2; i < n; i++) {
//             if (n % i === 0) {
//                 return false;
//             }
//         }
//         return n > 1;
//     }
//     console.log(isPrime(13));
// }

// let number = prompt("Enter a number: ");
// let result = "";
// for (let i = 2; i <= number; i++) {
//     if (isPrime(i)) {
//         result += $(i);
//     }
// }
// exercise2()


// function exercise3() {
//     let calculator = {
//         read: function () {
//             this.number1 = prompt("Enter a number");
//             this.number2 = prompt("Enter another number");
//         }
//         sum: function () {
//             return this.number1 + this.number2;
//         }
//         nul: function () {
//             return this.number1 * this.number2;
//         }
//     }
//     calculator.read();
//     alert(calculator.sum());
//     alert(calculator.nul());
// }
// exercise3();

// function exercise4() {
//     let ladder = {
//         step: 0,
//         up() {
//             this.step++;
//             return this;
//         },
//         down() {
//             this.step--;
//             return this;
//         },
//         showStep() {
//             alert(this.step);
//             return this;
//         }
//     }
// }
// exercise4();

// function exercise5(str, maxLenght) {
//     if (str.length > maxLenght) {
//         str =  str.slice(0, maxLenght) + "...";
//         console.log(str)
//         return str;
//     }
// }
// exercise5("Hello00000000000", 5);



// function exercise6() {
//     const numbers = [];
//     while (true) {
//         let input = prompt("Enter a number");
//         let number = parseFloat(input);

//         if (!isNaN(number)) {
//             numbers.push(number);
//         } else {
//             break
//         }
//     }
//     const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//     console.log(sum);
// }


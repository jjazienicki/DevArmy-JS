//Zadanie 2.3
// function isPerfect(a) {
//   var sumDzielnik=0;
//   for (var i = 1; i < a; i++) {
//       if (a%i===0){
//         sumDzielnik+=i;
//       }
//   }
//   return sumDzielnik===a;
// }
// console.log(isPerfect(137438691328))

//Zadanie 2.4
// function calculateMoney(nominals, money){
//     var result = {};
//     for (var i=0; i < nominals.length; i++){
//         var currentNominal = nominals[i];
//         var divider = money/currentNominal;
//         if (divider >= 1){
//             var count = parseInt(divider);
//             result[currentNominal] = count;
//             money = money - (currentNominal*count);
//         }
//     }
//     return result;
// }
// var nominals = [500,200,100,50,20,10,5,2,1];
// var money = 45218;
// console.log(calculateMoney(nominals, money));

//Zadanie 2.5
// function reversArray(){
//     var array = [1,2,3,4,5];
//     var newArray = [];
//     for (var i = array.length - 1; i >= 0; i--){
//        var currentEl = array[i];
//        newArray.push(currentEl);
//     }

//     return newArray;
// }

// console.log(reversArray())

//Zadanie 2.7
// function isHigher() {
//   var numbers = [-6, -2, -8, -1, -3];
//   var higher = numbers[0];

//   for (var i = 1; i < numbers.length; i++) {
//       var currentNumber = numbers[i];
//     if(currentNumber > higher){
//         higher = currentNumber;
//     }
//   }
//   return higher;
// }

// console.log(isHigher());

//Zadanie 2.1
// function power(x, n){
//         var result = x;
//     for (var i = 1; i<n; i++){
//         result = result*x;
//     }
//     return result;
// }

// console.log(power(3, 4));

//Zadanie 2.8
// function sort(tab) {
//   var didChange = true;
//   while (didChange) {
//     didChange = false;
//     for (var i = 0; i < tab.length - 1; i++) {
//       if (tab[i+1] < tab[i]) {
//         var temp = tab[i+1];
//         tab[i+1] = tab[i];
//         tab[i] = temp;
//         didChange = true;
//       }
//     }
//   }
//   return tab;
// }

// console.log(sort([1, 2, 5, 1, 7, 3]));

//Zadanie 2.9
// function printKeyValues(object) {
//   for (let key of Object.keys(object)) {
//     console.log(key + ": " + object[key]);
//   }
// }

// var testObj = {
//   name: "Matt",
//   age: "22",
//   occupation: "student"
// };

// printKeyValues(testObj);

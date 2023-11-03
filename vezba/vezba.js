//zadatak 6
// function doesFiveExist(array){
//     for(let i = 0; i < array.length; i++){
//         if(array[i] === 5){
//             console.log('Broj 5 se nalazi na poziciji ' + i);
//             return;
//         }
//     }
//     console.log('Nema broja 5');
// }

// doesFiveExist([1, 5, 7]);

//zadatak 7
// function secondLargestNumber(array){
//     let largestNumber = 0;
//     let secondLargest = 0;
//     array.forEach(element => {
//         if(element > largestNumber){
//             largestNumber = element;
//         }
//     });
//     array.forEach(element => {
//         if(element > secondLargest && element < largestNumber){
//             secondLargest = element;
//         }
//     });
//     return secondLargest;
// }

// console.log(secondLargestNumber([3, 5, 77, 51, 66]));

//zadatak 8
// function pairOfNumbersThatAddUpToN(n, array){
//     pairs = [];
//     array.forEach(element1 => {
//         array.forEach(element2 => {
//             if(element1 + element2 === n){
//                 let newPair = [];
//                 newPair.push(element1, element2);
//                 pairs.push(newPair);
//             }
//         });
//     });

//     return pairs;
// }

// console.log(pairOfNumbersThatAddUpToN(10, [2, 7, 8, 4, 3]));

//zadatak 9
// function createArraysOfEvenAndOddNumbers(array){
//     let evenArray = [];
//     let oddArray = [];
//     let bothArrays = [];

//     array.forEach(element => {
//         if(element % 2 === 0){
//             evenArray.push(element)
//         }else{
//             oddArray.push(element);
//         }
//     });

//     bothArrays.push(evenArray, oddArray);
//     return bothArrays;
// }

// console.log(createArraysOfEvenAndOddNumbers([1, 20, 3, 4, 5, 6, 7, 6, 66, 10]));

//zadatak 10
// function lowestNumberDivisibleBy3(array) {
//   for (i = 0; i < array.length; i++) {
//     if (array[i] % 3 === 0) {
//       console.log(`U zadatom nizu najmanji broj deljiv sa 3 je ${array[i]} na poziciji ${i}`);
//       return;
//     }
//   }
// }

// lowestNumberDivisibleBy3([4, 5, 8, 9, 10]);

//zadatak 11
// function doNeighborsHaveTheSameValue(array){
//     let neighbors = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] == array[i - 1]){
//             neighbors.push(array[i]);
//         }
//     }
//     console.log(`Postoje ${neighbors.length} grupe suseda koji imaju iste vrednosti. Te vrednosti su:`);
//     neighbors.forEach(element => {
//         console.log(element);
//     });
// }

// doNeighborsHaveTheSameValue([1, 5, 5, 4, 6, 7, 7, 4, 4]);

//zadatak 12
function reverseArray(array){
    let newArray = [];
    for(let i = array.length - 1; i >= 0; i--){
        newArray.push(array[i]);
    }

    return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7]));
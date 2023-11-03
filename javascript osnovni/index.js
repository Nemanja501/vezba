//zadatak 1
function average(a, b, c){
    return (a + b + c) / 3;
}

console.log(average(1, 2, 3));

//zadatak 2
function arrayAverage(array){
    let sum = 0;
    let i = 0;
    array.forEach(element => {
        sum += element;
        i++;
    });
    return sum / i;
}

let arr = [3, 4, 5];
console.log(arrayAverage(arr));

//zadatak 3
function squareOrRoot(n){
    if(n % 2 !== 0){
        return n * n;
    }
    return Math.sqrt(n);
}

console.log(squareOrRoot(5));

//zadatak 4
function sortString(string){
    return string.split('').sort().join('')
}

console.log(sortString('javascript'));

//zadatak 5
function returnLastElementOfArray(array){
   return array[array.length - 1];
}

console.log(returnLastElementOfArray([2, 3, 4, 5, 6]));

//zadatak 6
function sum(array){
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(sum([2, 4, 6]));

//zadatak 7
let square = {
    a: 2,
    area: function(){
        return this.a * this.a;
    },
    perimeter: function(){
        return 4 * this.a;
    }
}

console.log(square.area());
console.log(square.perimeter());

//zadatak 8
let object = {
    sides: 7,
    color: 'red',
    getInfo: function(){
        console.log(this.color + ' color and ' + this.sides + ' sides.');
        return this.sides + this.color;
    }
}

object.getInfo();

//zadatak 9
function turnStringToUpperCase(string, callback){
    if(string.length < 4){
        return string;
    }
    return callback(string);
}

function upperCaseString(string){
    return string.toUpperCase();
}

console.log(turnStringToUpperCase('string', upperCaseString));

//zadatak 10
function reverseNumber(n){
    return parseInt(n.toString().split('').reverse().join(''));
}

let x = 32243;
console.log(reverseNumber(x));

//zadatak 11
function checkIfPalindrome(string){
    if(string == string.split('').reverse().join('')){
        return true;
    }
    return false;
}

console.log(checkIfPalindrome('madam'));

//zadatak 12
function longestWord(string){
    let splitWords = string.split(" ");
    let longestWord = '';
    splitWords.forEach(element => {
        if(element.length > longestWord.length){
            longestWord = element;
        }
    });

    return longestWord;
}

console.log(longestWord('a bhbh dj'));

//zadatak 13
function isArrayElementLargerThanN(array, n){
    let newArray = [];
    array.forEach(element => {
        if(element > n){
            newArray.push(element);
        }
    });

    return newArray;
}
<?php

//zadatak 1
// function numbersDivisibleBy3(){
//     $divisibleNumbers = [];
//     for($i = 1; $i <= 30; $i++){
//         if($i % 3 === 0){
//             $divisibleNumbers[] = $i;
//         }
//     }
//     return $divisibleNumbers;
// }
// var_dump(numbersDivisibleBy3());

//zadatak 3
// function sumOfDigits($number){
//     $stringNumber = str_split(strval($number));
//     $result = 0;
//     foreach($stringNumber as $number){
//         $result += intval(($number));
//     }
//     return $result;
// }

// echo sumOfDigits(25);

//zadatak 4
// function evenNumbers(){
//     $evenNumbers = [];
//     for($i = 1; $i <= 30; $i++){
//         if($i % 2 === 0){
//             $evenNumbers[] = $i;
//         }
//     }
//     return $evenNumbers;
// }

// var_dump(evenNumbers());

//zadatak 5
function foobar(){
    for($i = 1; $i <= 30; $i++){
        if($i % 3 === 0 && $i % 5 === 0){
            echo $i .' foobar <br>';
        }else if($i % 3 === 0){
            echo $i .' foo <br>';
        }else if($i % 5 === 0){
            echo $i .' bar <br>';
        }
    }
}

foobar();
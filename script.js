console.log( " Homework#5");

function getIntNumber(arr){
    return arr.filter(function(number){
         return Number.isInteger(number);
 });
 }
 
 
 function getRandomArray(length,min,max){
     const arr = [];
     for (let i = 0; i < length;i++){
         let randomNumber = Math.random() * max;
         randomNumber = randomNumber + min;
         randomNumber = Math.floor(randomNumber);
         arr[i] = randomNumber;
 
     }
     return arr;
 }
 
 function getAverage(...numbers){
     let result = 0;
     let arr = getIntNumber(numbers);
     for (let i = 0;i < arr.length; i++){
         let number = arr[i];
         result+=number;}
     return result = result/arr.length;
 }
 
 function getMedian(...numbers){
     let result = 0;
     const arr = getIntNumber(numbers);
    
     if(arr.length % 2 == 0){
         result = getAverage(...arr);
     } else {
         let resultIndex = (arr.length-1)/2;
         result = arr[resultIndex];
     }
 
     return result;
 }
 
 function filterEvenNumbers (...numbers){
     return numbers.filter(function(number){
         return   number % 2 !==0;
         })
     }
      
 
 function getDividedByFive (...numbers){
     return numbers.filter(function(number){
         return   number % 5 ==0;
             })
     }

     
 
 function replaceBadWords (sentence,badWords){
     const basicBadWords = ["fuck","shit"];
     const listOfBadWords = basicBadWords.concat(badWords);
     const splitSentence = sentence.split(' ');
     let sign = "*";
     for (let i = 0; i < splitSentence.length; i++){
     
         for (let j = 0; j < listOfBadWords.length; j++){
             let word = listOfBadWords[j];
             let numberOfSigns = word.length;
             let count = sign.repeat(numberOfSigns);
             splitSentence[i] = splitSentence[i].replace(word, count);  
          }
     }
     const cleanSentence = splitSentence.join(' ');
     return cleanSentence;
 }
 

console.log("GetRandomArray",getRandomArray(5,1,10));

console.log("GetAverage",getAverage(5,1,10,11,34));

console.log("GetMedian",getMedian(1,5,6,7,9,23,11));

console.log("FilterEvenNumbers",filterEvenNumbers(6,7,2,3,9,4,1));

console.log("GetDividedByFive",getDividedByFive(2,4,6,10,15,25,67,89));

console.log("ReplaceBadWords",replaceBadWords("fuck you fucking bastard three water green", ["bastard","green"]));
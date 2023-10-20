// Task 1 //

// function customSort(arr) {
//     const numbers = [];
//     const booleans = [];
//     const others = [];

//     for (let item of arr) {
//         if (typeof item === 'number') {
//             numbers.push(item);
//         } else if (typeof item === 'boolean') {
//             booleans.push(item);
//         } else {
//             others.push(item);
//         }
//     }

  
//     numbers.sort((a, b) => a - b);
//     booleans.sort(); 

   
//     const sortedArray = [...numbers, ...booleans, ...others];

//     return sortedArray;
// }


// const input1 = [7, 10, 5, 3, 2];
// const input2 = [1, 2, 3, 10, -4, true];
// const input3 = [];
// console.log(customSort(input1)); 
// console.log(customSort(input2)); 
// console.log(customSort(input3));



// Task 2 //

// function maxSumOfTwoElements(arr) {
//     if (arr.length < 2) {
//         return 0; 
//     }

//     arr.sort((a, b) => b - a); 

//     return arr[0] + arr[1]; 
// }

// function getInputAndCalculate() {
//     const inputString = prompt('Enter a list of numbers separated by commas:');
//     const inputArray = inputString.split(',').map(Number);

//     const output = maxSumOfTwoElements(inputArray);
//     alert(`Maximum sum of any two elements: ${output}`);
// }

// getInputAndCalculate();
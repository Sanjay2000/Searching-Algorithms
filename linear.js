// const array = [3, 17, 78, 4, 9, 19];

// let linearSearch = function (arr, num) {
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] === num) return i;
//   }
//   return -1
// };

// console.log(linearSearch(arr,4));



function iterativeBinarySearch(n, arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === n) {
            console.log(true);
            return (arr[mid]);
        } else if (arr[mid] < n) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}
const readline = require("readline-sync")
const input = readline.question("please enter the element which you want to find in the array ")
console.log(iterativeBinarySearch(parseInt(input),[3,5,11,17,25,30,32]));
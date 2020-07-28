const readline = require("readline-sync")

//-----------------Linear_Search------------------------------//


function linearSearch(num,arr) {
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === num) return i;
  }
  return false
};
const input = readline.question("please enter the element which you want to find in the array ")
console.log(linearSearch(parseInt(input),[3, 17, 78, 4, 9, 19]));


//----------------------Binary_Search----------------------------//

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
const input1 = readline.question("please enter the element which you want to find in the array ")
console.log(iterativeBinarySearch(parseInt(input1),[3,5,11,17,25,30,32]));
// function findOdd(A) {
//   return A.find((item) => item.num % 2 !== 0);
// }
// console.log(findOdd([7]));
// console.log(findOdd([0]));
// console.log(findOdd([1, 1, 2]));
// console.log(findOdd([1, 1, 2]));
// function findOdd(array) {
//   let count = 0;
//   let last;
//   array.sort();
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] === last) {
//       count++;
//       continue;
//     }
//     if (count % 2) return last;
//     {
//       last = array[index];
//       count = 1;
//     }
//   }
//   return last;
// }
// console.log(findOdd([7]));
// console.log(findOdd([0]));
// console.log(findOdd([1, 1, 2]));
// console.log(findOdd([1, 1, 2]));

function missingLetter(array) {
  let alphabet = ["abcdefghijklmnopqrstuvwxyz"];
  let first = alphabet.indexOf(array[0]);
  let arrayIndex = 0;
  let missing;

  for (let i = first; i < array.length; i++) {
    if (array[arrayIndex] === alphabet[i]) {
      arrayIndex++;
    } else {
      missing = alphabet[i];
    }
  }
  return missing;
}

console.log(missingLetter(["abcedf"]));
console.log(missingLetter(["O", "Q", "R", "S"]));
console.log(missingLetter(["yz"]));

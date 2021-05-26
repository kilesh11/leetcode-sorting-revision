// 485. Max Consecutive Ones
// const str = [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1];

// const words = str
//     .join('')
//     .split(0)
//     .reduce((a, b) => (a.length > b.length ? a : b)).length;
// console.log(words);
//  ===============================

// 1295. Find Numbers with Even Number of Digits
// const nums = [12, 345, 2, 6, 7896];
// const evenNums = nums.reduce(
//     (acc, num) => (num.toString().length % 2 === 0 ? acc + 1 : acc),
//     0
// );
// console.log(evenNums);
//  ===============================

// 977. Squares of a Sorted Array
// const nums = [-4, -1, 0, 3, 10];
// const sortedArray = nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
// console.log(sortedArray);
//  ===============================

// 1089. Duplicate Zeros
// const arr = [1, 0, 2, 3, 0, 4, 5, 0];
// const duplicateZero = function (arr) {
//     const newArr = [...arr];
//     let offset = 0;
//     newArr.forEach((num, i) => {
//         if (num === 0) {
//             arr.splice(i + offset, 0, 0);
//             offset++;
//         }
//     });
//     arr.splice(newArr.length);
// };
// duplicateZero(arr);
// console.log(arr);
//  ===============================

// 88. Merge Sorted Array
// const nums1 = [1, 2, 3, 0, 0, 0],
//     m = 3,
//     nums2 = [2, 5, 6];
// // n = 3;
// nums2.forEach((num2Char, i) => {
//     nums1[m + i] = num2Char;
// });
// nums1.sort((a, b) => a - b);
// console.log(nums1);
//  ===============================
// 27. Remove Element
// const nums = [0, 1, 2, 2, 3, 0, 4, 2];
// //     val = 2;
// function removeElement(nums, val) {
//     let j = nums.length - 1;
//     for (let i = nums.length - 1; i >= 0; i--) {
//         if (nums[i] === val) {
//             [nums[j], nums[i]] = [nums[i], nums[j]];
//             j--;
//         }
//     }
//     nums.splice(j + 1);

//     // nums.sort((a, b) => a - b);
//     // const i = nums.indexOf(val);
//     // while (nums[i] === val) {
//     //     nums.splice(i, 1);
//     // }
//     return nums.length;
// }
// const length = removeElement(nums, 2);
// console.log(length);
// console.log(nums);
//  ===============================
// 26. Remove Duplicates from Sorted Array
// const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// function removeDuplicate(nums) {
//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i - 1]) {
//             nums[j] = nums[i];
//             j++;
//         }
//     }
//     nums.splice(j);

//     // let i = 0;
//     // while (i < nums.length) {
//     //     if (nums[i] === nums[i + 1]) {
//     //         nums.splice(i, 1);
//     //     } else {
//     //         i++;
//     //     }
//     // }
//     return nums.length;
// }
// const length = removeDuplicate(nums);
// console.log(length);
// console.log(nums);
//  ===============================
// 238. Product of Array Except Self
// let output = [];
// nums.forEach((_, i) => {
//     const removed = nums.splice(i, 1);
//     output = [...output, nums.reduce((a, b) => a * b) + 0];
//     nums.unshift(removed[0]);
// });
// return output
//  ===============================
// 1346. Check If N and Its Double Exist
// const arr = [10, 2, 5, 3];
// // const arr = [-2, 0, 10, -19, 4, 6, -8];
// const exist = arr.some((num, i) => {
//     const index = arr.indexOf(num * 2);
//     return index !== -1 && index !== i;
// });
// console.log(exist);
//  ===============================
// 941. Valid Mountain Array
// const arr = [0, 3, 2, 1];
// function validMountainArray(arr) {
//     if (arr.length < 3) {
//         return false;
//     } else {
//         const index = arr.indexOf(Math.max(...arr));
//         if (index === 0 || index === arr.length - 1) {
//             return false;
//         }
//         return arr.every((num, i) => {
//             if (i < index) {
//                 return num < arr[i + 1];
//             } else if (i === arr.length - 1) {
//                 return true;
//             }
//             return num > arr[i + 1];
//         });
//     }
// }
// console.log(validMountainArray(arr));
//  ===============================
// 1299. Replace Elements with Greatest Element on Right Side
// const arr = [17, 18, 5, 4, 6, 1];
// function replaceElements(arr) {
//     return arr.map((num, i) =>
//         i === arr.length - 1 ? -1 : Math.max(...arr.slice(i + 1))
//     );
// }
// function replaceElements2(arr) {
//     let newArr = [];
//     newArr[arr.length - 1] = -1;
//     for (let i = arr.length - 2; i >= 0; i--) {
//         // newArr[4] = Maxof arr[5] and newArr[5]
//         // newArr[3] = Maxof arr[4] and newArr[4]  <-  equal Maxof arr[5] and newArr[5]
//         newArr[i] = Math.max(newArr[i + 1], arr[i + 1]);
//     }
//     return newArr;
// }
// console.log(replaceElements2(arr));
//  ===============================
// 283. Move Zeroes
// const nums = [3, 0, 1, 12, 0];
// function moveZeroes(nums) {
//     let nonZeroCount = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[nonZeroCount] = nums[i];
//             nonZeroCount++;
//         }
//     }
//     for (let j = nonZeroCount; j < nums.length; j++) {
//         //fill zero from non Zero index
//         nums[j] = 0;
//     }
// }
// moveZeroes(nums);
// console.log(nums);
//  ===============================
// 905. Sort Array By Parity
// const arr = [2, 1, 3, 4];
// function sortArrayByParity(nums) {
//     // for (let i = 0; i < nums.length; i++) {
//     //     const index = nums.findIndex((num) => num % 2 === 1);
//     //     if (index !== -1) {
//     //         [nums[index], nums[i]] = [nums[i], nums[index]];
//     //     }
//     // }

//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             [nums[j], nums[i]] = [nums[i], nums[j]];
//             j++;
//         }
//     }
//     return nums;
// }
// sortArrayByParity(arr);
// console.log(arr);
//  ===============================
// 1051. Height Checker
// const heights = [5, 1, 2, 3, 4];
// function heightChecker(heights) {
//     const sortHeight = [...heights].sort((a, b) => a - b);
//     let count = 0;
//     for (let i = 0; i < heights.length; i++) {
//         if (heights[i] !== sortHeight[i]) count++;
//     }
//     return count;
// }

// console.log(heightChecker(heights));
//  ===============================
// 414. Third Maximum Number
// const nums = [1, 2];
// function thirdMax(nums) {
//     const unique = new Set(nums);
//     const sortedUnique = [...unique].sort((a, b) => a - b);
//     if (sortedUnique.length < 3) {
//         return Math.max(...sortedUnique);
//     } else {
//         return sortedUnique[sortedUnique.length - 3];
//     }
// }
// console.log(thirdMax(nums));
//  ===============================
// 448. Find All Numbers Disappeared in an Array
// const nums = [4, 3, 2, 7, 8, 2, 3, 1];
// function findDisappearedNumbers(nums) {
//     // let disappeared = [];
//     // for (let i = 1; i < nums.length + 1; i++) {
//     //     if (nums.indexOf(i) === -1) {
//     //         disappeared.push(i);
//     //     }
//     // }
//     // return disappeared;
//     const set = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         set.add(i + 1);
//     }
//     for (const num of nums) {
//         set.delete(num);
//     }
//     return [...set];
// }
// console.log(findDisappearedNumbers(nums));
//  ===============================
// 977. Squares of a Sorted Array
// const nums = [-4, -1, 0, 3, 10];
// function sortedSquares(nums) {
//     return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
// }
// console.log(sortedSquares(nums));
//  ===============================
// 344. Reverse String
// const s = ['H', 'a', 'n', 'n', 'a', 'h'];

// function reverseString(s) {
//     // let l = 0;
//     // let r = s.length - 1;
//     // while (r > l) {
//     //     [s[l], s[r]] = [s[r], s[l]];
//     //     l++;
//     //     r--;
//     // }
//     // return s;
//     // return s.reverse();
// }
// console.log(reverseString(s));
//  ===============================
// const cartesian = (...arg) =>
//     arg.reduce((a, b) => a.flatMap((c) => b.map((d) => `${c}${d}`)));

// const product = cartesian(['a', 'b', 'c', 'd'], [1], ['x', 'y', 'z']);
// console.log('kyle_debug ~ file: leetcode.js ~ line 278 ~ product', product);
// function solution(A, B) {
//     const arr = (A * B).toString(2).split('');
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === '1') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(solution(3, 7));

// const regexp1 = new RegExp("[a-c]", "g");
// const str1 = "abcde";
// let matches = str1.matchAll(regexp1);
// /*
// 因為 matchAll 回傳一個 iterator，每次 next() 都是一個陣列，如 [ 'b', index: 1, input: 'abc', groups: undefined ]
// */

// let arr = Array.from(matches);
// console.log(arr);

// matches = str1.matchAll(regexp1);

// let arr2 = Array.from(matches, (m) => m[0]);
// console.log( arr2 ); //['a', 'b', 'c']

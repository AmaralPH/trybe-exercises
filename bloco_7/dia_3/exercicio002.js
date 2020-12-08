const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// implemente seus testes aqui

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4])

const myList = [1, 2, 3, 4];
console.log(myRemove(myList, 3));
assert.deepStrictEqual(myList, [1, 2, 3, 4])

assert.deepStrictEqual(myRemove(myList, 5), myList)
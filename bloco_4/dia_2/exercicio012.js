let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let array2 = [];

for (let i = 0; i < array.length; i += 1) {
    if (i === array.length -1) {
        array2.push(array[i] * 2);
    } else {
        array2.push(array[i] * array[i+1]);
    };
}

console.log(array)
console.log(array2)
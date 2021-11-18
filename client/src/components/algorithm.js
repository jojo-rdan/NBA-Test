const arr = [21, 43, 6, 10, -3];
const n = 7;
let counter = 0;
for (var i = 0; i < arr.length; i++){
    for (let j = i + 1; j < arr.length; j++) {
        counter++;
        if (arr[i] + arr[j] === n){
            console.log(n, i, j)
        }
    }
}
console.log(counter);


function sumar(arr = [2, 4, 2, 7, 9, 5, 2, 6, 2, 1, 0]) {
   mult = arr.reduce((a,b) => a + b);
    return mult;
}

console.log(sumar());
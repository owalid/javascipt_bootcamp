
const arr = [0, 12, -33, -42, 99, 100, 64, 39, 10]


const new_arr = arr.filter(element => (element >= 0 && element < 100))
console.table(new_arr)
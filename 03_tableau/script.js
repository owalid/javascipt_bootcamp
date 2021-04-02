

let arr = ['a', 'b', 'c', 'd']
let arr2 = new Array('a', 'b', 'c', 'd')

// console.table(arr)
// console.log(arr)


// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr.length)

// Parcourir un tableau

// ----- for basic  ----
// for (let cpt = 0; cpt < arr.length; cpt++) {
//   console.log(arr[cpt])
// }

// ---- foreach ----

// Exemple de fonction:
// const fonctionHello = (argument_1, argument_2, argument_3) => {
//   console.log(`Hello ${argument_1},  ${argument_2}, ${argument_3}`)
// }


// fonctionHello("abcd arg 1", "1234 arg2", "a1b2 arg3")
// fonctionHello("deuxieme fois", "deuxieme fois", "deuxieme fois")


// arr.forEach((element, indexArr) => console.log(element))

// console.table(arr_number)


// ----- map ----

// arr.map((element, indexArr) => console.log(element, indexArr))

// const arr_number = [1, 2, 33, 23, 55]

// console.log("Before map")
// console.table(arr_number)

// const new_arr_number = arr_number.map(element => element + 3)

// console.log("After map")
// console.table(new_arr_number)


// ---- filter ----

// Exemple fonction 2

// const getSizeArray = (array) => {
//   return array.length
// }

// const getSizeArray = (array) => array.length


// const arr_number_2 = [-12, 22, -3, 22, 44, 33, -66]

// const size_arr_num_2 = getSizeArray(arr_number_2)

// console.log(size_arr_num_2)




// const arr_number_2_filtered = arr_number_2
//                               .filter((element) => (element >= 0 || element === -12))

// const arr_number_2_filtered = arr_number_2
//                               .filter((element) => {
//                                 return (element >= 0 || element === -12)
//                               })

// console.table(arr_number_2_filtered)

// --- reduce ---

const array_number = [1, 2, 3, 4, 5, 6, 7]

// 1) 0 + 1 = 1: previousValue prend 1
// 2) 1 + 2 = 3: previousValue prend 3
// 3) 3 + 4 = 7: previousValue prend 7
// ......
const result = array_number.reduce((previousValue, currentValue) => previousValue + currentValue)

console.log(result)



// operateur logique


// && : ET
// || : OU
// ! : NON

let a = 0
let b = -12
let c = 22
let d = 3
let f = "3"

if (a <= 0 && b < 0) {
  console.log("1) (a est inferieur OU egal à 0) et (b est negatif)")
}

if (b < 0 && c > 0) {
  console.log("2) b est negatif ET c n'est pas negatif")
}

if (c > 0 && d === 3 && b < 0) {
  console.log("3) c est positif ET d est egal a nombre 3 ET b est negatif")
}

if ((f === 3 || d === 3) && b < 0) {
  console.log("4) f est egal au nombre 3 OU d est egal au nombre 3 ET b est negatif")
}

if (!((f === 3 && d === 3) || b < 0)) {
  console.log("5) L'inverse de (4)")
}
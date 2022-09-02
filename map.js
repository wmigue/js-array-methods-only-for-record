let arr = ["1", 2, "3"]
let resultado = arr.map(x => x === 2 ? "es un numero" : x)
console.log(resultado) 
//return:  ["1", "es un numero", 3]
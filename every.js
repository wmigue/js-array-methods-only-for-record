const menorCuarenta = (valor) => valor < 40

const arr = [1, 30, 39, 29, 10, 13]

console.log(arr.every(menorCuarenta))
//Determina si todos los elementos en el array satisfacen una condición.
//arr.every le pasa cada elemento a la funcion menorCuarenta, esta funcion lo evalua si cumple la condicion retornando true o false.
// return: true

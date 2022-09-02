
//Array.reduce((acumulado, elementosiguiente, indice), valorinicial)
const arr = [
    { id: 1, nombre: 'migue' },
    { id: 1, nombre: 'jano' },
    { id: 1, nombre: 'fermin' },
]
const reducer1 = arr.reduce((acc, el, i) => `${acc} ${i} ${el.nombre}`, 'acumulado')
console.log(reducer1)
//comienza con 'acumulado', evalua a 'migue', acumula, sigue con jano, acumula, etc...
// return: 'acumulado migue jano fermin'


const arr2 = [-2, -1, -3, -4, -100]
const maximo = (a, b) => Math.max(a, b)
const reducer2 = arr2.reduce(maximo)
console.log(reducer2)
// return: -1



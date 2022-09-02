//splice(posicion, borrarcuantoselementos, agregarestoselementos)
//cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.

const frutas = ["Banana", "Orange", "Apple", "Mango"]
const eliminada = frutas.splice(2,1, "Lemon", "Kiwi")

console.log("ahora frutas tiene: " + frutas)
console.log("se elimino: " + eliminada)
console.log(frutas)
console.log(eliminada)

//frutas = [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ]
//eliminada = [ 'Apple' ]
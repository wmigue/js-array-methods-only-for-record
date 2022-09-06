const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

const resultado = words.filter(x => x.length > 6)

console.log(resultado)
// return: Array ["exuberant", "destruction", "present"]
//crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
//si no hay coincidencias, retorna un array vacio []
//con resultado.length vemos la longitud del array devuelto.
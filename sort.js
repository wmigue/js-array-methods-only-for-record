//RETORNAR NUMERO A RANDOM DENTRO DE UN ARRAY.

const arr1 = [3, 1, 4, 2, 15]

const getRandomItem = (arr)=>{
  
  const index = Math.floor( Math.random() * arr.length)

  const random = arr[index]       

  return random   
}

getRandomItem(arr1)


const arr2 = [
  {
    name: 'mike',
    age: 36
  },
  {
    name: 'jano',
    age: 15
  },
  {
    name: 'fidela',
    age: 10
  },
  {
    name: 'fermin',
    age: 20
  }
]



//ORDENANDO ARRAYS

//menor a mayor
arr.sort( (a,b)=>a-b )
//mayor a menor
arr.sort( (a,b)=>b-a )

//mayor a menor y menor a mayor con objetos dentro de un array.
arr2.sort( (a,b) => a.age - b.age )
arr2.sort( (a,b) => b.age - a.age )

//orden alfabeto ascendente
arr2.sort( (a,b) =>{
    if(a.name < b.name) return -1
    if(a.name > b.name) return 1
    return 0;
})

//orden alfabeto descendente
arr2.sort( (a,b) =>{
    if(a.name < b.name) return 1
    if(a.name > b.name) return -1
    return 0;
})


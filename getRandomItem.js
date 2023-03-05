//RETORNAR item RANDOM DENTRO DE UN ARRAY.

const arr1 = [3, 1, 4, 2, 15]

const getRandomItem = (arr)=>{
  
  const index = Math.floor( Math.random() * arr.length)

  const random = arr[index]       

  return random   
}

getRandomItem(arr1)

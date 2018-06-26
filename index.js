var number = 10

function add5(){
  number += 5
}

function divideBy3(){
  number /= 3
  return number
  
}

divideBy3(number)


add5(number)



function makeInt(){
  parseInt(number)
}

function preserveDecimal(){
  parseFloat(number)
}

makeInt()

preserveDecimal()

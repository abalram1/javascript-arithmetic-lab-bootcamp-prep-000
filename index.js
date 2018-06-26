var number = 10

function add5(){
  number += 5
  return number
}

function divideBy3(){
  number /= 3
  return number
}

divideBy3(number)

add5(number)


function makeInt(){
  parseInt(number)
  return number
}

function preserveDecimal(){
  parseFloat(number)
  return number
}

makeInt(number)

preserveDecimal(number)

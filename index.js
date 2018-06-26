var number = 10

function add5(){
  number += 5
}

function divideBy3(){
  number /= 3
}

divideBy3(number)
console.log(number)

add5(number)
console.log(number)


function makeInt(){
  parseInt(number)
}

function preserveDecimal(){
  parseFloat(number)
}

makeInt()

preserveDecimal()

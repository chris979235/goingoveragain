function largest(arr){
    let largestNum = 0
    for ( i = 0; i < arr.length; i++) {
    if ( arr[i] > largestNum )
    {largestNum = arr[i]
    }
    }
    console.log(largestNum)
    }


largest([3, 5, 2, 8, 1]) // => 8

let array=["#3", "$$$", "C%4!", "Hey!"]

function anonymous(array){
  for (let i=0; i<array.length; i++){
    const aThroughZ=/[a-zA-z]/;
    let loop=array[i]
    if(loop.match(aThroughZ)){
      console.log(loop)
    }
    }
  }
anonymous(array)

function dividable(num1, num2){
  if (num1 / num2 %2===0){
    console.log(true)
  }
  else console.log(false)
}
dividable(100,25)
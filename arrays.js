let backPack = []

backPack.push('sword')
backPack.push('shield')
backPack.push('food')

console.log(backPack)

backPack.splice(0,1)

console.log(backPack)

backPack.unshift('coat')

console.log(backPack)

 backPack.shift()
 console.log(backPack)

 backPack.pop()

 console.log(backPack)

 backPack.push('flint', 'blanket', 'knife', 'food')

 console.log(backPack)

 console.log(backPack.length)

 let satchel = backPack.splice(3,2)

 console.log('satchel', satchel, 'backPack', backPack)

//  for(i=0; i< backPack.length; i++){
//  console.log(backPack[i])
//  }

//  for(i=0; i< satchel.length; i++){
//     console.log(satchel[i])
//  }

if (backPack.length >= 2){
    for(i=0; i <= 2; i++){
        console.log(backPack[i])
    }
} else{
    for(i=0; i < backPack.length; i++){
        console.log(backPack[i])
    }
}

backPack.push(...satchel)
console.log(backPack)


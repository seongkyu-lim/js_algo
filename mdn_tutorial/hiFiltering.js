
const arr = ['Happy Birthday!',
    'Merry Christmas my love',
    'A happy Christmas to all the family',
    'You\'re all I want for Christmas',
    'Get well soon']
let arr2 = []
let i = 0

for(var value in arr){
    if (arr[value].indexOf('Christmas') !== -1){
        console.log(value)
        arr2[i] = arr[value]
        i++
    }
}
console.log(arr2)
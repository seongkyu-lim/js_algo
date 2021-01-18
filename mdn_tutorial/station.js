
const arr = ['MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield']

let arr2 = []

for (let value in arr) {
    
    let sentence = arr[value].slice(0,3) + ':' + arr[value].slice(arr[value].indexOf(';')+1)
    arr2[value] = sentence
}
console.log(arr2)

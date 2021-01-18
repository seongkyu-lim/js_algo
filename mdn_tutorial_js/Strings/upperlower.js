const arr = ['lonDon',
'ManCHESTer',
'BiRmiNGHAM',
'liVERpoOL']

for (let value in arr){
    arr[value] = arr[value].toLowerCase();
    arr[value] = arr[value].replace(arr[value][0], arr[value][0].toUpperCase());
}
console.log(arr)
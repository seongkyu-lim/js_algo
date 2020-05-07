
function f() { return arguments } 

var args = f('a', 'b', 'c');

console.log(args.length);

console.log(args[0]);

console.log(args);

function toArray(arrayLikeObject) {

    return Array.prototype.slice.call(arrayLikeObject)
}

function f(x,y) {

    console.log(x,y);

    return arguments;

}

f(3);

console.log(f(3));

f(3,6,9);

console.log(f(3,6,9));

console.log(Math.abs(-2));

console.log(Math.pow(3,2));

let abc = 'abcde'

console.log(abc.slice(0,3))

export function length(array) {
    return array.length;
}
export function push(array, element) {
    //const add = (array[array.length] = element);
    array[array.length] = element;
    return array.length;
}

let array = ['pepe', 2];
let element = 'pepa';
  


push(array, element)

console.log(array.length);
export function length(array) {
    return array.length;
}
export function push(array, element) {
    //const add = (array[array.length] = element);
    array[array.length] = element;
    return array.length;
}
export function pop(array) {
    //array.length = array[array.length - 1];
    const element = array[array.length - 1];
    array.length = array.length - 1;
    return element;
    //console.log(array);
}

pop([12, 11, 15]);

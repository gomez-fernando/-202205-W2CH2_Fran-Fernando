export function length(array) {
    return array.length;
}
export function push(array, element) {
    //const add = (array[array.length] = element);
    array[array.length] = element;
    return array;
}

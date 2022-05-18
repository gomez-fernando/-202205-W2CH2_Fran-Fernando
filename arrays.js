export function length(array) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    return array.length;
}
export function push(array, element) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    array[array.length] = element;
    return array.length;
}
export function pop(array) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    const element = array[array.length - 1];
    array.length = array.length - 1;
    return element;
}
export function shift(array, elem) {
    if (!Array.isArray(array)) {
        throw new Error('The given parameter is not an array');
    }
    // const newElem = [elem];
    const newArray = [elem];
    for(let i = 1; i <= array.length; i++) {
        newArray[i] = array[i - 1];
    }
    array = newArray;
    console.log(array.length)
    return array.length;
}

shift([1,2,3], "er");
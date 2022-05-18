const noArrayError = {
    message: "The given parameter is not an array"
};

export function length(array) {
    if (!Array.isArray(array)) {
        return noArrayError;
    }
    return array.length;
}
export function push(array, element) {
    if (!Array.isArray(array)) {
        return noArrayError;
    }
    array[array.length] = element;
    return array.length;
}
export function pop(array) {
    if (!Array.isArray(array)) {
        return noArrayError;
    }
    const element = array[array.length - 1];
    array.length = array.length - 1;
    return element;
}

pop([12, 11, 15]);

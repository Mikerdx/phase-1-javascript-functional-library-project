// Helper function to get values from an array or object
function getValues(collection) {
    return Array.isArray(collection) ? collection : Object.values(collection);
}

// myEach function
function myEach(collection, callback) {
    const values = getValues(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    return collection;
}

// myMap function
function myMap(collection, callback) {
    const values = getValues(collection);
    let result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]));
    }
    return result;
}

// myReduce function
function myReduce(collection, callback, acc) {
    const values = getValues(collection);
    let startIndex = 0;
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

// myFind function
function myFind(collection, predicate) {
    const values = getValues(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) return values[i];
    }
    return undefined;
}

// myFilter function
function myFilter(collection, predicate) {
    const values = getValues(collection);
    let result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) result.push(values[i]);
    }
    return result;
}

// mySize function
function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// myFirst function
function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

// myLast function
function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// myKeys function
function myKeys(object) {
    return Object.keys(object);
}

// myValues function
function myValues(object) {
    return Object.values(object);
}


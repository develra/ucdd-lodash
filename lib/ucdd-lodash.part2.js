/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`.
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0);
 * // => []
 */
function range(start, end) {
    result = [];
    if (arguments.length == 1){
       var end = start;
       start = 0;
       }
    for( var i = start; i<end; i++)
        result.push(i);
    return result; 
}


/**
 * Creates an object composed of the picked `object` properties. Property
 * names may be specified as individual arguments or as arrays of property
 * names.
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.pick(object, 'user');
 * // => { 'user': 'fred' }
 *
 */
function pick(object, propertyNames) {
    result = {}
    for (i in propertyNames)
            result[propertyNames[i]] = object[propertyNames[i]];
    return result
}


/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * The function returns as soon as it finds a passing value and does not iterate
 * over the entire collection. The predicate is invoked with (value)
 */
function some(collection, predicate) {
    for (object in collection)
        if (predicate(collection[object]) == true)
            return true
    return false

}

/**
 * Checks if the given callback returns truthy value for **all** elements of a collection.
 */
function every(collection, predicate) {
    for (object in collection)
        if (predicate(collection[object]) != true)
            return false
    return true
}

/**
 * Iterates over elements of `collection`, returning the first element
 * that have the properties of the given
 * object, else `false`.
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 *
 * _.find(users, { 'age': 1 })
 * // => { 'user': 'pebbles', 'age': 1,  'active': false }
 *
 */
function find(collection, object) {
    for (i in collection)
        for (j in object){
            if (collection[i][j]!=object[j])
                break
            return collection[i];
        }
    return false;
           
            

}

// Export functions
var lib = {}
lib.range = range
lib.pick = pick
lib.some = some
lib.every = every
lib.find = find

module.exports = lib

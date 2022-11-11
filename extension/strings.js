
const numbers = '0123456789'.split('')
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
const globalLetters = 'abcdefghijklmnopqrstuvwxyzéèàç'.split('')

/**
 * 
 * @param {string|number} any 
 * @returns Boolean
 */
function isNumber(any) {
    return any && any.toString().split('').every(e => numbers.includes(e))
}

/**
 * 
 * @param {string|number} any 
 * @returns Boolean
 */
function isAlphabetic(any) {
    return any && any.toString().split('').every(e => globalLetters.includes(e.toLowerCase()))
}

/**
 * 
 * @param {string|number} any 
 * @returns Boolean
 */
function isAlphaNumeric(any) {
    return any && any.toString().split('').every(e => isNumber(e) || isAlphabetic(e))
}

/**
 * 
 * @param {string|number} any 
 * @returns Boolean
 */
function isWhiteSpace(any) {
    return any && any.toString().trim() === ''
}

/**
 * 
 * @param {string|number} any 
 * @returns Boolean
 */
function isPunctuation(any) {
    return any && any.toString().trim().split('').every(e => '?!.,&'.split('').includes(e.toLowerCase()))
}

/**
 * 
 * @param {string|number} any 
 * @returns Boolean
 */
function isMathSymbol(any) {
    return any && any.toString().trim().split('').every(e => '*/<>+-=^'.split('').includes(e.toLowerCase()))
}

function isSymbol(any) {
    return any && any.toString().trim().split('').every(e => '()[]{}#~|@\\\'"°^'.split('').includes(e.toLowerCase()) 
        || isMathSymbol(e) 
        || isPunctuation(e) 
        || isSpecialCharacters(e))
}

/**
 * 
 * @param {string|number} any 
 * @returns Boolean
 */
function isSpecialCharacters(any) {
    return any && any.toString().trim().split('').every(e => !isNumber(e) || !isAlphabetic(e) || isWhiteSpace(e))
}

/**
 * 
 * @param {string|number} any 
 * @returns Boolean
 */
function isUpperCase(any) {
    return any && any.toString().trim().split('').every(e => typeof e === 'string' && e !== e.toLowerCase());
}

module.exports = {
    isPunctuation,
    isSpecialCharacters,
    isUpperCase,
    isAlphaNumeric,
    globalLetters,
    isAlphabetic,
    isMathSymbol,
    isNumber,
    isSymbol,
    isWhiteSpace,
    letters,
    numbers,
}
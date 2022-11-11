module.exports.defined = function defined(any) {
    return! ['null', 'undefined'].includes(typeof any);
}
const { isNode } = require('./node.js')
const { ONotAvailableError } = require('./exceptions.js')

function select($) {
    if (isNode) throw new ONotAvailableError('document').message()

    return document.querySelector($);
}

module.exports.select = select
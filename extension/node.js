const { defined } = require("./defined.js")
const { workspace } = require('./workspace.js')

module.exports.isNode = isNode = defined(workspace.process)
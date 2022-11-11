const StringType = require ("./strings.js");
const { input } = require ('./input.js');
const DOM = require ('./dom.js');
const { isNode } = require ("./node.js");
const { workspace } = require ("./workspace.js");
const { defined } = require ('./defined.js');
const { array, range, string } = require ("./array.js");
const { ONotAvailableError } = require ('./exceptions.js');

module.exports = {
    StringType,
    DOM,
    workspace,
    array,
    range,
    str: string,
    Application: { isNode },
    Exceptions: { ONotAvailableError },
    STDIN: { input },
}
const { isNumber, isAlphabetic, letters, isUpperCase } = require('./strings.js')
const { defined } = require('./defined.js')

function range(x0, x1) {
    if (!defined(x1)) x1 = x0, x0 = 0

    let n = x0 + 0, v = x1 + 1, t = n, R = []

    while (t < v) R.push(t), t++
    return R
}

function array(i, v) {
    if (!i) return []

    let type = typeof i

    switch (type) {

        case "number":
            return range(i);
        
        case 'string':
            if (defined(v) && typeof v === 'number') {
                let R = []
                for (let x = 0; x < v; x++) R.push(i)
                return R
            }
            
            if (isNumber(i)) return range(parseInt(i))
            if (isAlphabetic(i)) {
                let idx = letters.indexOf(i.toLowerCase())
                if (idx < 0) return [i]
                else {
                    return [...letters.slice(0, idx), i].map(v => isUpperCase(i) ? v.toUpperCase() : v)
                }
            }

        default: return [i]
    }
}

function string(i) {
    if (!i) return []

    let type = typeof i

    switch (type) {

        case "number":
            return i.toString()
        
        case 'object':
            try {
                return JSON.stringify(i)
            } catch {
                return '{}'
            }

        case 'boolean':
            return i ? 'true' : 'false'

        case 'function':
            return i.toString()

        default:
            let R = i['toString'] && i['toString']()
            if (!defined(R)) return null
        break;
    }
}

module.exports = {
    string,
    array,
    range
}